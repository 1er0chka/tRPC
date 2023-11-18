import {inferAsyncReturnType, initTRPC, TRPCError} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import {ICoinResponse, ICoinsResponse, IHistoryResponse} from "../types/responses";
import * as schemas from '../schemas/schemas'
import {Coin} from "../types/coin";

const createContext = ({req, res,}: trpcExpress.CreateExpressContextOptions) => {
    return {req, res};
};

type Context = inferAsyncReturnType<typeof createContext>;
const trpc = initTRPC.context<Context>().create();

const router = trpc.router;

const postRouter = router({
    getCoins: trpc.procedure
        .input(schemas.offset)
        .mutation(async ({input}) => {
            try {
                const response: Response = await fetch(
                    "https://api.coincap.io/v2/assets?limit=40&offset=" + input.offset,
                )
                const responseJson: ICoinsResponse = await response.json() as ICoinsResponse
                return responseJson.data.filter((coin: Coin) => {
                    return coin.marketCapUsd && parseFloat(coin.priceUsd) >= 0.01
                })
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        }),

    getCoin: trpc.procedure
        .input(schemas.coinId)
        .mutation(async ({input}) => {
            try {
                const response: Response = await fetch(
                    "https://api.coincap.io/v2/assets/" + input.id,
                )
                if (response.status == 200) {
                    const responseJson: ICoinResponse = await response.json() as ICoinResponse
                    return responseJson.data
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

    getCoinHistory: trpc.procedure
        .input(schemas.coinHistory)
        .mutation(async ({input}) => {
            try {
                const response: Response = await fetch(
                    "https://api.coincap.io/v2/assets/" + input.id + "/history?interval=" + input.interval,
                )
                if (response.status == 200) {
                    const responseJson: IHistoryResponse = await response.json() as IHistoryResponse
                    return responseJson.data
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

    getCoinsNumber: trpc.procedure
        .mutation(async () => {
            try {
                let coinsNumbers: number = 0
                let lastRank: string = '0'
                while (true) {
                    const response: Response = await fetch(
                        "https://api.coincap.io/v2/assets?limit=2000&offset=" + lastRank,
                    )
                    const responseJson: ICoinsResponse = await response.json() as ICoinsResponse
                    if (responseJson.data.length == 0) {
                        break
                    }
                    lastRank = responseJson.data[responseJson.data.length - 1].rank
                    coinsNumbers += responseJson.data.filter((coin: Coin) => {
                        return coin.marketCapUsd && parseFloat(coin.priceUsd) >= 0.01
                    }).length
                }
                return {coinsNumber: coinsNumbers}
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        }),

    getSearchCoinResult: trpc.procedure
        .input(schemas.coinId)
        .mutation(async ({input}) => {
            try {
                const response: Response = await fetch(
                    "https://api.coincap.io/v2/assets?limit=2000&search=" + input.id,
                )
                const responseJson: ICoinsResponse = await response.json() as ICoinsResponse
                return responseJson.data.filter((coin: Coin) => {
                    return coin.marketCapUsd && parseFloat(coin.priceUsd) >= 0.01
                })
            } catch (e) {
                console.error('INTERNAL_SERVER_ERROR. Error fetching data: ', e)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Error fetching data'
                });
            }
        }),
});

const appRouter = trpc.router({
    post: postRouter,
});

async function main() {
    const app = express();

    app.use((req, _res, next) => {
        // request logger
        console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
        next();
    });

    app.use(
        '/trpc',
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext,
        }),
    );
    app.listen(2021, () => {
        console.log('listening on port 2021');
    });
}

void main();