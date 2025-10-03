import { FastifyReply, FastifyRequest } from "fastify";

export abstract class BaseCrudController {
  create(request: FastifyRequest, reply: FastifyReply) {
    return reply.send({
      message: "Basic crud controller abstract class"
    })
  }
}
