import { Injectable } from '@nestjs/common';
import { CreateGoodInput } from './dto/create-good.input';
import { UpdateGoodInput } from './dto/update-good.input';

@Injectable()
export class GoodsService {
  create(createGoodInput: CreateGoodInput) {
    return 'This action adds a new good';
  }

  findAll() {
    return `This action returns all goods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} good`;
  }

  update(id: number, updateGoodInput: UpdateGoodInput) {
    return `This action updates a #${id} good`;
  }

  remove(id: number) {
    return `This action removes a #${id} good`;
  }
}
