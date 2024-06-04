import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GoodsService } from './goods.service';
import { Good } from './entities/good.entity';
import { CreateGoodInput } from './dto/create-good.input';
import { UpdateGoodInput } from './dto/update-good.input';

@Resolver(() => Good)
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) {}

  @Mutation(() => Good)
  createGood(@Args('createGoodInput') createGoodInput: CreateGoodInput) {
    return this.goodsService.create(createGoodInput);
  }

  @Query(() => [Good], { name: 'goods' })
  findAll() {
    return this.goodsService.findAll();
  }

  @Query(() => Good, { name: 'good' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.goodsService.findOne(id);
  }

  @Mutation(() => Good)
  updateGood(@Args('updateGoodInput') updateGoodInput: UpdateGoodInput) {
    return this.goodsService.update(updateGoodInput.id, updateGoodInput);
  }

  @Mutation(() => Good)
  removeGood(@Args('id', { type: () => Int }) id: number) {
    return this.goodsService.remove(id);
  }
}
