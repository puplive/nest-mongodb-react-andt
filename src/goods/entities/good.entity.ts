import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Good {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
