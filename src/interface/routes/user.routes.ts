import z from "zod";
import { createUserSchema } from "../../../src/application/users/dto/create-user.schema";
import { UserUseCase } from "../../../src/application/users/user.useCase";
import { FastifyCustomInstance } from "../../../src/infra/config/types/fastify-instance.type";
import { UserRepositoryImpl } from "../../../src/infra/repositories/user.repositoryIMPL";
import { UsersController } from "../controllers/users/users.controller";
import { UserEntity } from "src/src/domain/entities/user.entity";

export default function usersRoute(fastify: FastifyCustomInstance) {
  const prefix = "/users";
  const repository = new UserRepositoryImpl();
  const service = new UserUseCase(repository);
  const controller = new UsersController(service);

  fastify.get(
    prefix,
    {
      schema: {
        description: "find all users",
        tags: ["users"],
      },
    },
    controller.findAll
  );

  fastify.post(
    prefix,
    {
      schema: {
        body: createUserSchema,
        tags: ["users"],
        response: {
          200: z.object(UserEntity),
        },
      },
    },
    controller.create
  );
}
