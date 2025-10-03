import { BootStrap } from "./infra/webserver";

BootStrap().then((app) => {
  app.listen({port: 3030}, (err: Error | null, address: string) => {
    if (err) {
      app.log.error(err);
      process.exit();
    }

    console.log(`Server running on ${address} port`)
  });
});
