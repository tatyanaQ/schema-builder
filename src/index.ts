import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { AppModule } from "./modules/app";
import { setRequestId } from "./middlewares/request-id";
import { logRequest } from "./middlewares/log-request";
import { authorize } from "./middlewares/auth";
import { AllExceptionsFilter } from "./middlewares/exception-filter";

const PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["debug", "verbose", "log", "warn", "error"],
  });
  app.use(setRequestId);
  app.use(logRequest);
  app.use(authorize);

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(PORT);
  Logger.log(`Server listening at ${PORT}`, "index");
}

bootstrap();
