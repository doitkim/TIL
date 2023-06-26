import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
// 모듈
@Module({
  controllers: [AppController],
})
export class AppModule {}
