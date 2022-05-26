import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  name?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  email?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Password is required' })
  password?: string;
}
