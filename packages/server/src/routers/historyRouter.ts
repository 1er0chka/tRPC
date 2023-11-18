import * as schemas from "../schemas/schemas";
import {IHistoryResponse} from "../types/responses";
import {TRPCError} from "@trpc/server";
import {trpc} from "../context/expressContext";

export const historyRouter = trpc.router({
    getById: trpc.procedure
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
        })
});