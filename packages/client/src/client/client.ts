import {createTRPCProxyClient, httpBatchLink, httpLink} from '@trpc/client';
import {AppRouter} from "server/src/appRouter";

const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpLink({
            url: 'https://trpc-server-38lb.onrender.com'
        }),
    ],
});

export default client