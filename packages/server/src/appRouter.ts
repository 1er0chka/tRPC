import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import cors from "cors";
import {coinsRouter} from "./routers/coinsRouter";
import {historyRouter} from "./routers/historyRouter";
import {createContext, trpc} from "./context/expressContext";

const appRouter = trpc.router({
    coins: coinsRouter,
    history: historyRouter
});

async function main() {
    const app = express();

    app.use(cors({
        origin: 'http://localhost:3000',
    }));
    app.use((req, _res, next) => {
        console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
        next();
    });

    app.use(
        '/coincap',
        trpcExpress.createExpressMiddleware({
            batching: {
                enabled: false
            },
            router: appRouter,
            createContext,
        }),
    );
    app.listen(2021, () => {
        console.log('listening on port 2021');
    });
}

void main();

export type AppRouter = typeof appRouter