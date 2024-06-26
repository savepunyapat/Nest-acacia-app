/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe, VersioningType} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,// 422
  }));
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
