// Original file: src/proto/user.proto


export interface UserRequest {
  getUserId(): unknown;
  'userId'?: (string);
  'username'?: (string);
  'email'?: (string);
}

export interface UserRequest__Output {
  'userId'?: (string);
  'username'?: (string);
  'email'?: (string);
}
