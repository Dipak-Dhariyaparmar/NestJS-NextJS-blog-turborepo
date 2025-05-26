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

// This code defines a GraphQL object type for the authentication payload