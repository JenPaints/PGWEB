import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  sports: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    trialPrice: v.number(),
    features: v.array(v.string()),
    videoUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  }),
  
  bookings: defineTable({
    sportId: v.id("sports"),
    type: v.union(v.literal("trial"), v.literal("enrollment")),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("cancelled")),
    scheduledDate: v.optional(v.number()),
    guestName: v.string(),
    guestEmail: v.string(),
    guestPhone: v.optional(v.string()),
  }),

  testimonials: defineTable({
    name: v.string(),
    sport: v.string(),
    rating: v.number(),
    comment: v.string(),
    imageUrl: v.optional(v.string()),
  }),

  enquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    sport: v.string(),
    message: v.string(),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("resolved")),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
