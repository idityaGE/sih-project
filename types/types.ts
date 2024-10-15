import { Role } from "@prisma/client";

export type LoginFormSchema = {
  email: string;
  password: string;
  role: Role
}