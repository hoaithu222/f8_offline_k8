import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProudctsService } from 'src/proudcts/proudcts.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ProudctsService],
})
export class UsersModule {}
