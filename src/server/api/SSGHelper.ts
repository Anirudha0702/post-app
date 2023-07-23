import { createServerSideHelpers } from '@trpc/react-query/server'
import { createInnerTRPCContext } from './trpc'
import { appRouter } from './root'
import superjson from 'superjson'

export function  SSGHelper() {
    return createServerSideHelpers({
        router:appRouter,
        ctx: createInnerTRPCContext({session : null}),
        transformer: superjson
    })
}
