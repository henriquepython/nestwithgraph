import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @Field()
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @Field()
  email: string;
}
