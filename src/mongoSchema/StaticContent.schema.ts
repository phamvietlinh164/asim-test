import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class StaticContent extends Document {
  // @Prop()
  // name: string;

  @Prop({
    required: true,
  })
  partnerId: string;

  @Prop({
    required: true,
  })
  domainList: []


}

export const StaticContentSchema = SchemaFactory.createForClass(StaticContent);