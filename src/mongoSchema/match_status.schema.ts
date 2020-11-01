import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class match_status extends Document {
  // @Prop()
  // name: string;

  @Prop({
    required: true,
  })
  round: string;

  @Prop({
    required: true,
  })
  date: string

  @Prop({
    required: true,
  })
  team1: string

  @Prop({
    required: true,
  })
  team2: string

  @Prop({
    required: false,
  })
  score: {}


}

export const match_status_schema = SchemaFactory.createForClass(match_status);