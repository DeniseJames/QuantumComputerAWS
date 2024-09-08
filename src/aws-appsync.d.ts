declare module 'aws-appsync' {
    export const AUTH_TYPE: {
      API_KEY: string;
      AWS_IAM: string;
      AMAZON_COGNITO_USER_POOLS: string;
      OPENID_CONNECT: string;
    };
  
    export default class AWSAppSyncClient {
      constructor(config: any);
    }
  }
  