import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return `<h1>Học nest js không khó</h1>`;
  }
  @Get('/gioi-thieu')
  getAbout(): string {
    return `<h1>Giới thiệu</h1>`;
  }
}
