import viVN from 'ant-design-vue/es/locale/vi_VN';

export const theme = {
  token: {
    fontFamily: 'var(--font-family-base)',
    colorPrimary: '#069255',
    fontSize: 16,
    borderRadius: 4,
  },
};

export const ANT_LOCALE = {
  ...viVN,
  Empty: {
    ...viVN.Empty,
    description: 'Chưa có dữ liệu',
  },
};
