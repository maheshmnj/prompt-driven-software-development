import * as grpc from '@grpc/grpc-js';
import { UserServiceHandlers, UserServiceDefinition } from '../proto/users/UserService';
import { UserResponse } from '../proto/users/UserResponse';
import { UserRequest, UserRequest__Output } from '../proto/users/UserRequest';

const server = new grpc.Server();

const bindAddress = '127.0.0.1:50051';
server.bindAsync(
    bindAddress,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) {
            console.error(`Error binding to ${bindAddress}: ${err}`);
        } else {
            console.log(`Server running at ${bindAddress}`);
            server.start();
        }
    }
);

