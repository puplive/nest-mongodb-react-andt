import { CreateGoodInput } from './create-good.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGoodInput extends PartialType(CreateGoodInput) {
  @Field(() => Int)
  id: number;
}
