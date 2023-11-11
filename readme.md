### Installation

- npm init -y
- npm install @grpc/grpc-js @grpc/proto-loader typescript ts-node
- npm install -g grpc-tools
- npm install --save-dev @types/node @grpc/grpc-js @types/google-protobuf tsc --init

## generate typescript files

```
npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ src/proto/user.proto

or

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ src/proto/user/proto
```

