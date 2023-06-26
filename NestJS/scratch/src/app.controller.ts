import { Controller, Get } from "@nestjs/common";
// 컨트롤러
@Controller("/app") // 라우트 핸들러
export class AppController {
  @Get("/asdf") // 라우트 핸들러
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "Bye There!";
  }
}
