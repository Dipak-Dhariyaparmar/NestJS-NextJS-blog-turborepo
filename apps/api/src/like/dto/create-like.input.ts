import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLikeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

// this code defines a GraphQL input type for creating a like, with a single field `exampleField` of type `Int`.
// The `@InputType()` decorator marks the class as a GraphQL input type, and the `@Field()` decorator defines the field's type and description.