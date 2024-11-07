import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validatetionErrors: ValidationError[]) => {
        const newError = validatetionErrors.map((error: ValidationError) => {
            return {
              [error.property]: Object.values(error.constraints)[0],
            };
          });
          return new BadRequestException(newError);
      },
    }),
  ); // tự động validate khi có request
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
