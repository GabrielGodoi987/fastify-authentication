import { UserEntity } from "../../../src/domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repositry";
import { CreateUserSchema } from "./dto/create-user.schema";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUser: CreateUserSchema): Promise<Partial<UserEntity>> {
    const user = await this.userRepository.createUser(createUser);
    return {
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}
