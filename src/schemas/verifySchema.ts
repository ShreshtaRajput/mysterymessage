import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().min(6, {
    message: "The verification code should be atleast 6 digits",
  }),
});
