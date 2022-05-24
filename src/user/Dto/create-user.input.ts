import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  email: string;
}
