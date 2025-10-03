# Fastify Authentication Project  

Projeto criado para estudar **autenticação com Fastify**, aplicando **princípios do SOLID** e **Clean Architecture**, sempre seguindo boas práticas de **Clean Code**.  

## 🔑 Objetivos

- Aprender a estruturar uma aplicação de autenticação usando Fastify.  
- Praticar separação de responsabilidades com **Camadas** bem definidas.  
- Implementar boas práticas de **design de software** (Clean Architecture + SOLID).  
- Testar a aplicação com **Jest** e boas práticas de TDD.  

---

## 🚀 Tecnologias Utilizadas

- [Fastify](https://fastify.dev/) — Web framework rápido e minimalista.  
- [Prisma ORM](https://www.prisma.io/) — ORM moderno para Node.js.  
- [Jest](https://jestjs.io/) — Framework de testes.  
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática.  
- [JWT](https://jwt.io/) — Autenticação baseada em token.  
- [bcrypt](https://www.npmjs.com/package/bcrypt) — Hashing seguro de senhas.  

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── application/            # Orquestração da lógica de negócio (useCases, DTOs, serviços)
 ├── domain/                 # Regras de negócio puras
 │   ├── entities/           # Entidades de domínio
 │   ├── enums/              # Enums do domínio
 │   ├── interfaces/         # Contratos e interfaces do domínio
 │   └── repositories/       # Contratos de repositórios
 ├── interface/              # Camada de entrada/saída (controllers e rotas)
 │   ├── controllers/        # Controllers expostos ao mundo externo
 │   │   └── users/          # Controllers relacionados a usuários
 │   └── routes/             # Configuração de rotas
 ├── infrastructure/         # Implementações técnicas (DB, config, webserver)
 │   ├── config/             # Configurações
 │   │   └── types/          # Tipos auxiliares
 │   │       └── fastify-instance.type.ts # Instância customizada do Fastify
 │   ├── repositories/       # Implementações concretas dos repositórios
 │   └── webserver.ts        # Setup do servidor
 └── app.ts                  # Ponto de entrada da aplicação

test/                        # Testes automatizados
 └── jest.config.ts          # Configuração do Jest
