import viVN from 'ant-design-vue/es/locale/vi_VN';
import { Locale } from 'ant-design-vue/es/locale';
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

export const theme: ThemeConfig = {
  token: {
    fontFamily: 'var(--font-family-base)',
    colorPrimary: '#069255',
    fontSize: 16,
    borderRadius: 4,
  },
};

export const ANT_LOCALE: Locale = {
  ...viVN,
  Empty: {
    ...viVN.Empty,
    description: 'Chưa có dữ liệu',
  },
};
