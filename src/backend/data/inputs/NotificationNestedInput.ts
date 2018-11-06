/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';
import { NotificationPriority } from '../enums/NotificationPriority';
import { NotificationSound } from '../enums/NotificationSound';

// <keep-imports>
// </keep-imports>

@InputType()
export class NotificationNestedInput {
  @Field(() => EntityIdScalar, { nullable: true })
  public id?: EntityId;

  @Field(() => String, { nullable: true })
  public title?: string | null;

  @Field(() => String, { nullable: true })
  public body?: string | null;

  @Field(() => NotificationPriority, { nullable: true })
  public priority?: NotificationPriority | null;

  @Field(() => NotificationSound, { nullable: true })
  public sound?: NotificationSound | null;

  @Field(() => Number, { nullable: true })
  public badge?: number | null;

  // <keep-methods>
  // </keep-methods>
}
