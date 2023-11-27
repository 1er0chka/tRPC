import {createTRPCProxyClient, httpBatchLink, httpLink} from '@trpc/client';
import {AppRouter} from "server/src/appRouter";

const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpLink({
            url: 'https://trpc-service.onrender.com'
        }),
    ],
});

export default client