import { z, ZodError } from "zod";

export const userSchemaValidator = z.object({
  username: z
    .string()
    .min(4, "minimum length of usernamename is 6")
    .max(12, "maximum length of usernamename is 6"),
  email: z.string().email("please input a valid email"),
  password: z
    .string()
    .min(8, "minimum length of password  is 8")
    .max(16, "maximum length of password  is 16"),
});

export interface userResult {
  data?: any;
  error?: ZodError["issues"];
}
