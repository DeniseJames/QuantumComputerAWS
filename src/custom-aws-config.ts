const customAwsConfig = {
    API: {
      endpoints: [
        {
          name: "My AppSync API",
          endpoint: "https://w5574xwipbd4tfluh7ml5yfb4i.appsync-api.us-east-2.amazonaws.com/graphql",
          region: "us-east-2",
          custom_header: async () => {
            return {
              Authorization: "3n576r4r4rem3h7vekphtjikd4", // Replace with your actual API key
            };
          },
        },
      ],
    },
  };
  
  export default customAwsConfig;
  