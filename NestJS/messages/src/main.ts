import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // 애플리케이션 전역에 유효성 검사하도록 글로벌 파이프 적용
  // class-validator class-transformer 설치
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
