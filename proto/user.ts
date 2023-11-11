import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _users_UserServiceClient, UserServiceDefinition as _users_UserServiceDefinition } from './users/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  users: {
    UserRequest: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _users_UserServiceClient> & { service: _users_UserServiceDefinition }
  }
}

