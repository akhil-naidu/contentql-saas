import { argv } from 'process';
import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('products').collect();
  },
});

export const add = mutation({
  args: { name: v.string(), description: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert('products', {
      description: args.description,
      name: args.name,
    });
  },
});
