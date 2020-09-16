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

  async update(domainInfo: any): Promise<StaticContent> {
    // const createdStaticContentModel = new this.staticContentModel(staticContent);
    // console.log(domainInfo)
    // const partnerId = staticContent.partnerId;
    // const domainList = staticContent.newDomainList
    const id = domainInfo._id
    const enviroment = domainInfo.enviroment;
    const domain = domainInfo.domain;

    return this.staticContentModel
      .update({ _id: id }, { enviroment, domain })
      .exec()
  }

  async delete(id: string): Promise<string> {
    // const createdStaticContentModel = new this.staticContentModel(staticContent);
    // console.log(domainInfo)
    // const partnerId = staticContent.partnerId;
    // const domainList = staticContent.newDomainList
    // const id = domainInfo._id
    // const enviroment = domainInfo.enviroment;
    // const domain = domainInfo.domain;
    await this.staticContentModel.deleteOne({ _id: id })

    return new Promise((resolve, reject) => {
      resolve('Delete success!')
    })
  }
}