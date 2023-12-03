import * as schemas from "../schemas/schemas";
import {ICoinResponse, ICoinsResponse} from "../types/responses";
import {TRPCError} from "@trpc/server";
import {trpc} from "../context/expressContext";
import {Coin} from "../../../../types/coin";
import axios, {AxiosResponse} from "axios";

export const coinsRouter = trpc.router({
    getAll: trpc.procedure
        .input(schemas.offset)
        .mutation(async ({input}) => {
            console.log(input)
            try {
                const response: AxiosResponse<ICoinsResponse> = await axios.get("https://api.coincap.io/v2/assets?limit=40&offset=" + input.offset)
                return response.data.data.filter((coin: Coin) => {
                    return coin.marketCapUsd && parseFloat(coin.marketCapUsd) >= 0.01 && parseFloat(coin.priceUsd) >= 0.01
                })
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        }),

    getById: trpc.procedure
        .input(schemas.coinId)
        .mutation(async ({input}) => {
            try {
                const response: AxiosResponse<ICoinResponse> = await axios.get("https://api.coincap.io/v2/assets/" + input.id)
                if (response.status == 200) {
                    return response.data.data
                }
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Data not found',
            });
        }),

    getNumber: trpc.procedure
        .mutation(async () => {
            try {
                let coinsNumbers: number = 0
                let lastRank: string = '0'
                while (true) {
                    const response: AxiosResponse<ICoinsResponse> = await axios.get(
                        "https://api.coincap.io/v2/assets?limit=2000&offset=" + lastRank,
                    )
                    if (response.data.data.length == 0) {
                        break
                    }
                    lastRank = response.data.data[response.data.data.length - 1].rank
                    coinsNumbers += response.data.data.filter((coin: Coin) => {
                        return coin.marketCapUsd && parseFloat(coin.marketCapUsd) >= 0.01 && parseFloat(coin.priceUsd) >= 0.01
                    }).length
                }
                return coinsNumbers
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        }),

    getSearchResult: trpc.procedure
        .input(schemas.coinId)
        .mutation(async ({input}) => {
            try {
                const response: AxiosResponse<ICoinsResponse> = await axios.get(
                    "https://api.coincap.io/v2/assets?limit=2000&search=" + input.id,
                )
                return response.data.data.filter((coin: Coin) => {
                    return coin.marketCapUsd && parseFloat(coin.marketCapUsd) >= 0.01 && parseFloat(coin.priceUsd) >= 0.01
                })
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        })
});