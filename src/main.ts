import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Main } from './Code/main';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);


  //start code
  const main = new Main(300000);
  main.start();
}
bootstrap();
