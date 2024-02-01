import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { MessagesModule } from './messages/messages.module'

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //Here we want to validate all incoming request so we have use global pipes
  app.useGlobalPipes( 
    new ValidationPipe()  // use to validete incoming request
  );
  await app.listen(3000);
}
bootstrap();
