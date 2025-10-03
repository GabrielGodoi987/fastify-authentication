"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const app = (0, fastify_1.fastify)({
    logger: true,
});
app.get("/", () => {
    return "starting application";
});
app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando na porta: ${address}`);
});
//# sourceMappingURL=app.js.map