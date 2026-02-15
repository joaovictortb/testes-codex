import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Informe um email válido'),
  password: z.string().min(6, 'A senha precisa ter ao menos 6 caracteres')
});

export const signupSchema = z
  .object({
    name: z.string().min(2, 'Informe seu nome completo'),
    email: z.string().email('Informe um email válido'),
    password: z.string().min(6, 'Crie uma senha com no mínimo 6 caracteres'),
    confirmPassword: z.string().min(6)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword']
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
