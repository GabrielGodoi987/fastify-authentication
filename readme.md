# Project created to learn authentication with fastify, SOLID principles and clean architechture.

#clean-code #cean-architecture #SOLID #fastify

## Used Tools

- fastify
- Prisma ORM
- jest
- typescript
- jwt
- bcrypt

## Project structure

```bash
src/
 |____application/ // folder responsible only to manage business logic of the applicatoin
 |____domain/ // pure business logic of application
 |    |____entities
 |    |____enums // business enum 
 |    |____interfaces
 |    |____repositories // repositories contracts -> domain is only responsible to represent the pure business logic of the system
 |____interface/ // connect external world with the application. Translate json to useCases
 |    |____controllers/ 
 |    |    |____users/ // separeted with only users concerns
 |    |    |    |____user.controller.ts
 |    |____routes/ // route configuration file
 |    |    |    |____user.route.ts
 |____infrastructure/
 |    |____config/
 |    |    |____types
 |    |    |    |____fastify-instance.type.ts // customized instance of FastifyInstance to use zod validator
 |    |____repositories
 |    |____webserver.ts // configuration file responsible to set up the application
 |___app.ts // the entrypoint of the application, responsible for start up all the application
test/   // test
 |___jest.config.ts // test configuration file

```
