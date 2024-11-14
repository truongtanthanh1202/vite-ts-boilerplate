const env = import.meta.env;
const config = {
  appUrl: env.VITE_APP_URL || '',
  env: env.VITE_NODE_ENV || '',
  oidc: {
    clientId: env.VITE_OIDC_CLIENT_ID,
    issuer: env.VITE_OIDC_ISSUER || 'https://auth.ghtklab.com',
    redirectUri: env.VITE_OIDC_REDIRECT_URI,
    scopes: ['openid'],
    pkce: true,
    isAuthzBackground: false,
    authnUrl: env.VITE_OIDC_AUTH_URL,
  },
  appAdminUrl: env.VITE_APP_ADMIN_URL,
};

export default config;
