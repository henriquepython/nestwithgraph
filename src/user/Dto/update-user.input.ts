import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  email: string;
}
