import * as trpcExpress from "@trpc/server/dist/adapters/express";
import {inferAsyncReturnType, initTRPC} from "@trpc/server";

export const createContext = ({req, res,}: trpcExpress.CreateExpressContextOptions) => {
    return {req, res};
};

type Context = inferAsyncReturnType<typeof createContext>;
export const trpc = initTRPC.context<Context>().create();
