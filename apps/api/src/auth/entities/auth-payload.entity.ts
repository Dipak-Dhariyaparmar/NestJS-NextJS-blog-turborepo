import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthPayload {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  avatar?: string;
  @Field()
  accessToken: string;
}

// this file defines the payload returned after a successful authentication
// it uses decorators from the NestJS GraphQL module to define the fields
// the payload includes the user's id, name, optional avatar, and access token