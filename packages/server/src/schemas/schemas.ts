import {z} from "zod";

export const offset = z.object({
    offset: z.number() || z.string()
})

export const coinId = z.object( {
    id: z.string()
})

export const coinHistory = z.object({
    id: z.string(),
    interval: z.string()
})
