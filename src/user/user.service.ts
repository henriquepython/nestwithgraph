import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './Dto/create-user.input';
import { UpdateUserDto } from './Dto/update-user.input';
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
    const user = await this.userRepoitory.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user = this.userRepoitory.create(data);
    const userSaved = await this.userRepoitory.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException(
        'Problem to create a user. Try again',
      );
    }

    return userSaved;
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.userRepoitory.findOne(id);

    if (!user) {
      throw new NotFoundException('Problem to updated a user. Try again');
    }

    await this.userRepoitory.update(user, { ...data });

    return this.userRepoitory.create({ ...user, ...data });
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.findUserById(id);

    const deleted = await this.userRepoitory.delete(user);

    if (deleted) {
      return true;
    }
    return false;
  }
}
