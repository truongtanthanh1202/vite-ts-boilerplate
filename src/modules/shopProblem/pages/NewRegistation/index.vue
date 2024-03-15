<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import { Button } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';

import type { IDataSource } from '@/components';
import { DataTable } from '@/components';
import { shopService } from '@/services';

onMounted(() => {
  getList();
});

const dataSource = reactive<IDataSource>({
  loading: false,
  noDataText: 'Không có shop nào',
  tableConfig: {
    scroll: { y: 700 },
  },
  paginator: {
    current: 1,
    total: 0,
    pageSize: 10,
  },
  data: [],
  columns: [
    {
      title: 'Thông tin shop',
      width: '32%',
      scopedSlots: 'shopInfo',
      className: 'align-top',
    },
    {
      title: 'Lịch sử hoạt động',
      width: '50%',
      scopedSlots: 'history',
      className: 'align-top',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      scopedSlots: 'shopAction',
      className: 'align-top',
    },
  ],
});

async function getList(page = 1) {
  dataSource.loading = true;
  const { success, data: shop } = await shopService
    .getNewRegistationList({ page, per_page: dataSource.paginator.pageSize })
    .finally(() => (dataSource.loading = false));

  console.log('resInCom', shop);

  if (success) {
    dataSource.data = shop.data;
    dataSource.paginator = {
      ...dataSource.paginator,
      total: shop.total,
      current: shop.current_page,
      pageSize: parseInt(shop.per_page),
    };
  }
}

function handleLoadPage(params) {
  dataSource.paginator.pageSize = params.pageSize;

  getList(params.current);
}
</script>

<template>
  <div class="page">
    <div class="headline text-[20px] px-3 py-5 flex justify-between items-center">
      <h3 class="font-medium mb-0">Shop đăng ký mới</h3>

      <Button type="primary" class="rounded-sm px-2">
        <SearchOutlined />
        Tìm kiếm
      </Button>
    </div>

    <div class="p-3">
      <DataTable :dataSource="dataSource" @tableChange="handleLoadPage">
        <template #shopInfo="{}">
          <div class="shopInfo">
            <div class="headline flex mb-2">
              <div class="headline__avatar mr-2">
                <img class="w-12 h-12 rounded-full object-cover" src="@/assets/images/avatar.jpg" />
              </div>
              <div>Hà Phương Anh | 096***2931</div>
            </div>

            <div class="devices flex flex-wrap mb-2">
              <div class="devices__item bg-gray-300 px-3 py-[2px] rounded-2xl mr-2 mb-1"># IOS 14.3</div>
              <div class="devices__item bg-gray-300 px-3 py-[2px] rounded-2xl mr-2 mb-1"># Ver1.1.03</div>
            </div>

            <div class="userAction flex flex-wrap">
              <Button type="primary" ghost size="small" class="userAction__item">Hoàn thành</Button>
              <Button type="primary" ghost size="small" class="userAction__item">Liên hệ lại</Button>
            </div>
          </div>
        </template>
        <template #shopAction="{}">
          <div class="action flex items-center flex-col">
            <Button type="primary" class="action__item">Chat shop</Button>
            <Button type="primary" class="action__item">Gọi shop</Button>
          </div>
        </template>
        <template #history="{}">
          <div class="align-top">
            <p class="font-medium mb-7">Thời gian đăng ký: 13:45 - 13/04/2022:</p>
            <div class="callLog flex justify-between">
              <div class="callLog__text text-ghtk-light">Call log gọi shop/KH</div>
            </div>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
