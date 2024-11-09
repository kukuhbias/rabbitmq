import z, { ZodError } from "zod";

export const orderSchemaValidator = z.object({
  productName: z
    .string()
    .min(6, "minimum length of product name is 6")
    .max(25, "maximum length of product name is 25"),
  price: z.number(),
  sellerName: z.string(),
});

export interface orderResult {
  data?: any;
  error?: ZodError["issues"];
}
