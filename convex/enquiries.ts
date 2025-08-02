import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitEnquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    sport: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("enquiries", {
      ...args,
      status: "new",
    });
  },
});
