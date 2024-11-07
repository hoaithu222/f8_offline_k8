import { Controller, Get, Param, Body, Post,Patch, Query, Headers, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { ProudctsService } from 'src/proudcts/proudcts.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/upadate-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly productService: ProudctsService,
  ) {}
  @Get()
  async index(@Query() query,@Headers() headers,@Res() res, @Req() req) {
    console.log(headers["x-api-key"]);
    console.log(req);
    //Gọi service
    const response = {
      user: await this.userService.getUsers(),
      product: await this.productService.getProducts(),
      query,
    };
    // return response;
    res.set('x-total-count',10);//set response header
    return res.status(404).json(response);
  }
  @Get(':id')
  find(@Param('id') userId: string) {
    return this.userService.getUser(+userId);
  }
  @Post()
  create(@Body() body: CreateUserDto) {
    return body;
  }
  @Patch(':id')
  update(@Body() body: UpdateUserDto,@Param('id') userId: string){
    return {
      body,
      userId,
    };
  }
}

/*
function getA(b: B) {
  b = new B;

}


*/
