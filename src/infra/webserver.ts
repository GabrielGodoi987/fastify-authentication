import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import fastifyAutoload from "@fastify/autoload";
import { join } from "path";

export async function BootStrap() {
  const server = fastify({
    logger: true,
  }).withTypeProvider<ZodTypeProvider>();

  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  
  await server.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Auth fastify",
        description:
          "Fastify application to learn clean architecture and the best practices to auth users",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local development server url",
        },
      ],
      tags: [
        {
          name: "users",
          description: "CREATE, READ, UPDATE, DELETE users",
        },
      ],
    },
    swagger: {
      host: "localhost:3030",
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    transform: jsonSchemaTransform,
  });
  
  await server.register(fastifySwaggerUi, {
    routePrefix: "/api-docs",
  });
  
  // registro de rotas
  server.register(fastifyAutoload, {
    dir: join(__dirname, "../interface/routes"),
    prefix: "/api",
  });


  
  return server;
}
