import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// import vitePluginImp from 'vite-plugin-imp';

const ENV_PATH = './env';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, ENV_PATH) };

  return defineConfig({
    plugins: [
      vue(),
      // vitePluginImp({
      //   libList: [
      //     {
      //       libName: 'ant-design-vue',
      //       style: (name) => `ant-design-vue/es/${name}/style`,
      //     },
      //   ],
      // }),
    ],
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       modifyVars: {
    //         'primary-color': '#00904a',
    //       },
    //       javascriptEnabled: true,
    //     },
    //   },
    // },
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
