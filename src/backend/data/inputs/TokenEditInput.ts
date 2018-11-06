/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';

// <keep-imports>
// </keep-imports>

@InputType()
export class TokenEditInput {
  @Field(() => EntityIdScalar)
  public id: EntityId;

  @Field(() => String, { nullable: true })
  public content?: string | null;

  // <keep-methods>
  // </keep-methods>
}
