import z from "zod";
import { UserRole } from "../../../domain/enums/user-role.enum";

export const createUserSchema = z.object({
  name: z.string().min(10, "Name should'v at least 10 characters"),
  role: z.enum(UserRole),
  email: z.email({
    pattern:
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
  }),
  password: z.string().min(5).max(10),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
