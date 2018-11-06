/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';

import { ChannelNestedInput } from './ChannelNestedInput';
import { NotificationNestedInput } from './NotificationNestedInput';

// <keep-imports>
// </keep-imports>

@InputType()
export class NotificationChannelCreateInput {
  @Field(() => NotificationNestedInput)
  public notification: NotificationNestedInput;

  @Field(() => ChannelNestedInput)
  public channel: ChannelNestedInput;

  // <keep-methods>
  // </keep-methods>
}