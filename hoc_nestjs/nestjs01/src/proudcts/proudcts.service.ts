import { Injectable } from '@nestjs/common';

@Injectable()
export class ProudctsService {
  async getProducts() {
    return {
      id: 1,
      name: 'Product 1',
    };
  }
}
