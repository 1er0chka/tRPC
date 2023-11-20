import {createTRPCProxyClient, httpBatchLink, httpLink} from '@trpc/client';
import {AppRouter} from "server/src/appRouter";

const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpLink({
            url: 'http://localhost:2021/coincap'
        }),
    ],
});

export default client