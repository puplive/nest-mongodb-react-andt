// 解析器
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { findUserInput } from './dto/find-user.input';
import { Schema as MongooseSchema } from 'mongoose';

@Resolver(() => User)
export class UserResolver {
  // 依赖注入
  constructor(private readonly userService: UserService) { }

  @Mutation(() => User)
  async createUser(
    @Args('payload') payload: CreateUserInput,
  ) {
    return this.userService.create(payload);
  }

  @Query(() => [User])
  async findAll(
    @Args('filters', { nullable: true }) filters?: findUserInput,
  ) {
    return this.userService.findAll(filters);
  }

  @Query(() => User)
  async findOne(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.userService.findOne(_id);
  }

  @Mutation(() => User)
  async updateUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.update(payload);
  }

  @Mutation(() => User)
  async removeUser(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.userService.remove(_id);
  }
}
