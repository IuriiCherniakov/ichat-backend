import { Schema, Prop } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class AbstractEntity {
  @Prop({ type: SchemaTypes.ObjectId })
  @Field(() => ID)
  _id: Types.ObjectId;
}
