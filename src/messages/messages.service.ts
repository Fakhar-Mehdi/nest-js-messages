import { Injectable } from '@nestjs/common';
import { MessagesRepo } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepo) {}
  async findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  async findAll() {
    return this.messageRepo.findAll();
  }
  async create(content: string) {
    return this.messageRepo.create(content);
  }
}
