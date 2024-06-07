import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  name: string;

  @Column()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  email: string;

  @Column()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  password: string;
}
