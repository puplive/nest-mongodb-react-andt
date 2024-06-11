// 服务层
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { findUserInput } from './dto/find-user.input';
import { User, UserDocument } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}


  create(payload: CreateUserInput) {
    const createdUser = new this.userModel(payload);
    return createdUser.save()
  }

  findAll(filters: findUserInput) {
    return this.userModel.find({ ...filters }).exec();
  }

  findOne(_id: MongooseSchema.Types.ObjectId) {
    return this.userModel.findById(_id);
  }

  update(payload: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  remove(_id: MongooseSchema.Types.ObjectId) {
    return this.userModel.findByIdAndDelete(_id).exec();
  }
}
