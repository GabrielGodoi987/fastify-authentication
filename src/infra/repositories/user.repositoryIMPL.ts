import { CreateUserSchema } from "../../application/users/dto/create-user.schema";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repositry";

export class UserRepositoryImpl implements UserRepository {
  async createUser(data: CreateUserSchema): Promise<Partial<UserEntity>> {
    return await data;
  }
}
