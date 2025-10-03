import { CreateUserSchema } from "../../application/users/dto/create-user.schema";
import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  createUser(createUserData: CreateUserSchema): Promise<Partial<UserEntity>>;
}
