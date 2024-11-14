interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_OIDC_CLIENT_ID: string;
  readonly VITE_OIDC_ISSUER: string;
  readonly VITE_OIDC_REDIRECT_URI: string;
  readonly VITE_OIDC_AUTH_URL: string;
  readonly VITE_ENV_TYPE: 'testing' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
