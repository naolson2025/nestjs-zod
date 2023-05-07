// import { IsEmail, IsString } from 'class-validator';

// export class CreateUserDto {
//   @IsEmail()
//   email: string;

//   @IsString()
//   password: string;
// }

import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
})

export interface CreateUserDto {
  email: string;
  password: string;
}
