import { FastifyReply, FastifyRequest } from "fastify";
import { UserUseCase } from "../../../../src/application/users/user.useCase";
import { CreateUserSchema } from "../../../../src/application/users/dto/create-user.schema";
import { UserEntity } from "src/src/domain/entities/user.entity";

export class UsersController {
  constructor(private readonly userService: UserUseCase) {}

  async create(
    request: FastifyRequest<{ Body: CreateUserSchema }>,
    reply: FastifyReply
  ): Partial<UserEntity> {
    const { name, email, password, role } = request.body;
    const user = await this.userService.create({ name, email, password, role });
  
    return {
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }

  findAll() {
    return {
      message: "Hello fastify",
      status: 200,
    };
  }
}
