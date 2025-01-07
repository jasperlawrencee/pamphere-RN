import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('633300206578-1kmk577bkqgcgggt0cldsa7ugdhc4eg9.apps.googleusercontent.com'),
        clientSecret: secret('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')
      },
      callbackUrls: [],
      logoutUrls: [],
    }
  },
});
