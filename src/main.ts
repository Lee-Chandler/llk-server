import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'; // 引入 NestExpressApplication

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  }); // 注意类型指定为 NestExpressApplication

  app.useStaticAssets(join(__dirname, '..', 'public')); // 配置静态资源

  await app.listen(4000);
}
bootstrap();
