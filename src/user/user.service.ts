import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './Dto/create-user.dto';
import { User } from './Entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepoitory: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.userRepoitory.find();
    return users;
  }

  async findUserById(id: string): Promise<User> {
    const user = this.userRepoitory.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user = await this.userRepoitory.create(data);
    const userSaved = await this.userRepoitory.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Problema para criar usuário.');
    }

    return userSaved;
  }
}
