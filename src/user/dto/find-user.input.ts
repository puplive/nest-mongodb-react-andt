import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class findUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
}
