import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const ENV_PATH = './env';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, ENV_PATH) };

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    envDir: resolve(__dirname, ENV_PATH),
    server: {
      port: parseInt(process.env.VITE_APP_PORT) || 3000,
    },
  });
};
