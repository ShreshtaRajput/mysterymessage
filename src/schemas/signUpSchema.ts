import { z } from "zod";

const usernameValidation = z
  .string()
  .min(2, { message: "The username must be atleast 2 characters long" })
  .max(25, { message: "The username must be less than 25 characters" })
  .regex(/^[a-zA-Z0-9]+$/, {
    message: "Username must not contain any special character",
  });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "The password must be atleast 6 characters long" }),
});
