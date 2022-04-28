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
  paginator: {
    current: 1,
    total: 0,
    pageSize: 15,
  },
  data: [],
  columns: [
    {
      title: 'Thông tin shop',
      width: '36%',
      scopedSlots: 'shopInfo',
    },
    {
      title: 'Lịch sử hoạt động',
      width: '54%',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
    },
  ],
});

async function getList(page = 1) {
  dataSource.loading = true;
  const res = await shopService
    .getNewRegistationList({ page, per_page: 5 })
    .finally(() => (dataSource.loading = false));

  if (res.code === 'SUCCESS') {
    dataSource.data = res.payload.data;
    dataSource.paginator = {
      ...dataSource.paginator,
      total: res.payload.total,
      current: res.payload.current_page,
    };
  }
}

function handleLoadPage(params) {
  getList(params.current);
}
</script>

<template>
  <div class="page">
    <div class="headline text-[20px] px-3 py-5 flex justify-between items-center">
      <h3 class="font-medium mb-0">Shop đăng ký mới</h3>
      <router-link to="/shop-lives">Hello</router-link>

      <Button type="primary" class="rounded-sm px-2">
        <SearchOutlined />
        Tìm kiếm
      </Button>
    </div>

    <div class="p-3">
      <DataTable :dataSource="dataSource" @table-change="handleLoadPage">
        <template #shopInfo="{ record }"> <SearchOutlined /> {{ record.name }} </template>
      </DataTable>
    </div>
  </div>
</template>
