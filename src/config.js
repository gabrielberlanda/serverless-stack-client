const config = {
  s3: {
    REGION: "sa-east-1",
    BUCKET: "berlanda-notes-app-upload",
  },
  apiGateway: {
    REGION: "sa-east-1",
    URL: "https://c5vfg548ce.execute-api.sa-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "sa-east-1",
    USER_POOL_ID: "sa-east-1_ZkZ9XKTL8",
    APP_CLIENT_ID: "2oojbsae78ku66gducrdcud9c9",
    IDENTITY_POOL_ID: "sa-east-1:9572d36b-c14a-456f-ba93-ba7ba4884039",
  },
};

export default config;