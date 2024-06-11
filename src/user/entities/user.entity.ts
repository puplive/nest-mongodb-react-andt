import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument , Schema as MongooseSchema} from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;

}
export const UserSchema = SchemaFactory.createForClass(User);