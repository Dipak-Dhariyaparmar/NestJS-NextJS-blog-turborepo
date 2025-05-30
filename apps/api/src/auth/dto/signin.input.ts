import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class SignInInput {
  @Field()
  email: string;

  @Field()
  @IsString()
  @MinLength(1)
  password: string;
}

// this file defines the input type for signing in a user
// it uses decorators from the NestJS GraphQL module to define the fields