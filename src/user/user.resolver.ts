import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserDto } from './Dto/create-user.dto';
import { User } from './Entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await this.userService.findAllUsers();
    return users;
  }

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    const users = await this.userService.findUserById(id);
    return users;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDto): Promise<User> {
    const User = await this.userService.createUser(data);
    return User;
  }
}
