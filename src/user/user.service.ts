// 服务层
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // 注入 user 仓库
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const { name, email, password } = createUserInput;
    return this.userRepo.save({ name, email, password });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.userRepo.update({ id }, updateUserInput);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
