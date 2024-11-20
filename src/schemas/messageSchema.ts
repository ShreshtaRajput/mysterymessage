import { z } from "zod";

export const messageSchema = z.object({
  messages: z
    .string()
    .min(10, { message: "The message must be atleast 10 characters long" })
    .max(300, { message: "Message too long, must be less than 300 words" }),
});
