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

// this is a GraphQL input type for signing in a user
// it includes fields for email and password