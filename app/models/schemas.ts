import { ZodSchema, z } from 'zod';

export const leadGen = z.object({
  name: z.string().nonempty({ message: 'please enter name' }),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(10, { message: 'Must be at least 10 numbers' })
    .regex(/^[0-9]+$/, 'Phone number should only contain digits')
    .transform((val) => Number(val)),
  message: z.string(),
});

export type LeadGenSchema = z.infer<typeof leadGen>;
