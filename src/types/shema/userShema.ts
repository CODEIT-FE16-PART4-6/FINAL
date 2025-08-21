import { z } from 'zod';
//로그인 요청 스키마
export const LoginRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});
//로그인 응답 스키마
export const LoginResponseSchema = z.object({
  user: z.array(
    z.object({
      id: z.number(),
      nickname: z.string(),
      email: z.string(),
      profileImageUrl: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
