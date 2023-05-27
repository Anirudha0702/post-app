import { createTRPCRouter } from "~/server/api/trpc";
import { PostRouter } from "~/server/api/routers/post";

export const appRouter = createTRPCRouter({
  post:PostRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
