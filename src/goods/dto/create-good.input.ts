import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGoodInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
