import { Module } from '@nestjs/common';
import { ProudctsService } from './proudcts.service';

@Module({
  providers: [ProudctsService]
})
export class ProudctsModule {}
