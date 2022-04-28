<script lang="ts" setup>
import { ref } from 'vue';
import { Button } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';

// import type { IDataSource } from '@/components';
import { DataTable } from '@/components';

// const dataSource = ref<IDataSource>({
//   extras: {
//     processing: false,
//     noDataText: 'Không có đơn hàng nào',
//   },
//   paginator: {
//     textHint: 'ĐH',
//     currentPage: 1,
//     total: 0,
//     perPage: 10,
//   },
//   data: [],
//   columns: [
//     {
//       title: 'Thông tin shop',
//       width: '16%',
//       scopedSlots: 'shopInfo',
//     },
//   ],
// });
</script>

<template>
  <div class="page">
    <div class="headline text-[20px] px-3 py-5 flex justify-between items-center">
      <h3 class="font-medium mb-0">Shop lives</h3>

      <Button type="primary" class="rounded-sm px-2">
        <SearchOutlined />
        Tìm kiếm
      </Button>
    </div>

    <!-- <div class="p-3">
      <DataTable></DataTable>
    </div> -->
  </div>
</template>
