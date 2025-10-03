import { UserRepository } from "../../domain/repositories/user.repositry";
import { CreateUserSchema } from "./dto/create-user.schema";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUser: CreateUserSchema) {
    return await this.userRepository.createUser(createUser);
  }
}
