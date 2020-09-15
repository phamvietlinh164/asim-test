import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StaticContent } from '../../mongoSchema/StaticContent.schema';


@Injectable()
export class DomainListService {
  constructor(@InjectModel(StaticContent.name) private staticContentModel: Model<StaticContent>) { }

  async findAll(): Promise<StaticContent[]> {
    // console.log(await this.staticContentModel.find().exec())
    // console.log('abc');
    return this.staticContentModel.find().exec();
  }

  async findById(partnreId: string): Promise<StaticContent[]> {
    // console.log(await this.staticContentModel.find().exec())
    // console.log('abc');
    return this.staticContentModel.find({ partnerId: partnreId }).exec();
  }

  async create(staticContent: {}): Promise<StaticContent> {
    const createdStaticContentModel = new this.staticContentModel(staticContent);
    return createdStaticContentModel.save();
  }

}