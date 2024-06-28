/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import { json } from 'express';
import { RedisIoAdapter } from './events/redis-io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.use(helmet());
  app.use(
    json({
      limit: '30mb',
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY, // 422
    }),
  );
  // เพิ่ม performance ในการทำงานของ websocket
  // const redisIoAdapter = new RedisIoAdapter(app);
  // await redisIoAdapter.connectToRedis();

  // app.useWebSocketAdapter(redisIoAdapter);
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
