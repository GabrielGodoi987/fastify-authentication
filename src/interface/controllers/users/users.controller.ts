import { FastifyReply, FastifyRequest } from "fastify";
import { UserUseCase } from "../../../../src/application/users/user.useCase";
import { CreateUserSchema } from "../../../../src/application/users/dto/create-user.schema";

export class UsersController {
  constructor(private readonly userService: UserUseCase) {}

  create(
    request: FastifyRequest<{ Body: CreateUserSchema }>,
    reply: FastifyReply
  ) {
    const { name, email, password, role } = request.body;
    const result = this.userService.create({ name, email, password, role });
    return reply.send({
      result,
    });
  }

  findAll() {
    return {
      message: "Hello fastify",
      status: 200,
    };
  }
}
