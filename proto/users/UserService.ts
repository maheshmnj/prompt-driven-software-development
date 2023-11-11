// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UserRequest as _users_UserRequest, UserRequest__Output as _users_UserRequest__Output } from '../users/UserRequest';
import type { UserResponse as _users_UserResponse, UserResponse__Output as _users_UserResponse__Output } from '../users/UserResponse';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;

  DeleteUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;

  GetUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;

  UpdateUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserResponse__Output>): grpc.ClientUnaryCall;

}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_users_UserRequest__Output, _users_UserResponse>;

  DeleteUser: grpc.handleUnaryCall<_users_UserRequest__Output, _users_UserResponse>;

  GetUser: grpc.handleUnaryCall<_users_UserRequest__Output, _users_UserResponse>;

  UpdateUser: grpc.handleUnaryCall<_users_UserRequest__Output, _users_UserResponse>;

}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_users_UserRequest, _users_UserResponse, _users_UserRequest__Output, _users_UserResponse__Output>
  DeleteUser: MethodDefinition<_users_UserRequest, _users_UserResponse, _users_UserRequest__Output, _users_UserResponse__Output>
  GetUser: MethodDefinition<_users_UserRequest, _users_UserResponse, _users_UserRequest__Output, _users_UserResponse__Output>
  UpdateUser: MethodDefinition<_users_UserRequest, _users_UserResponse, _users_UserRequest__Output, _users_UserResponse__Output>
}
