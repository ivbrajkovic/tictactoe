import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
});

export const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
