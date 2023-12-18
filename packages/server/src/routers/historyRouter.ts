import * as schemas from "../schemas/schemas";
import {IHistoryResponse} from "../types/responses";
import {TRPCError} from "@trpc/server";
import {trpc} from "../context/expressContext";
import axios, {AxiosResponse} from "axios/index";

export const historyRouter = trpc.router({
    getById: trpc.procedure
        .input(schemas.coinHistory)
        .mutation(async ({input}) => {
            try {
                const response: AxiosResponse<IHistoryResponse> = await axios.get("https://api.coincap.io/v2/assets/" + input.id + "/history?interval=" + input.interval)
                return response.data
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        })
});