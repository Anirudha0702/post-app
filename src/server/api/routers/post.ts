import { contextProps } from "@trpc/react-query/shared";
import { z } from "zod";
import { kStringMaxLength } from "buffer";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const PostRouter = createTRPCRouter({
 create: protectedProcedure.input(z.object({content: z.string()})).mutation(async ({input:{content},ctx})=>{
    return await ctx.prisma.post.create({
      data:{
        content,
        userId:ctx.session.user.id
        }
      })
  })
});
