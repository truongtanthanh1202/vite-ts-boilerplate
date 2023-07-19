<script lang="ts" setup>
import { toRefs } from 'vue';
import { Table } from 'ant-design-vue';

import { IDataSource, IColumn } from './types';

interface IProps {
  dataSource: IDataSource;
}

interface BodyCell {
  record?: any;
  index?: number;
  column?: IColumn;
}

const props = defineProps<IProps>();
const { dataSource } = toRefs(props);

const emit = defineEmits<{
  (e: 'tableChange', params): void;
}>();

function handleTableChange(pageData) {
  emit('tableChange', pageData);
}
</script>

<template>
  <div>
    <Table
      v-bind="dataSource.tableConfig"
      :dataSource="dataSource.data"
      :columns="dataSource.columns"
      bordered
      :pagination="dataSource.paginator"
      :loading="dataSource.loading"
      @change="handleTableChange"
    >
      <template #bodyCell="{ record, index, column }: BodyCell">
        <template v-if="column.scopedSlots">
          <slot :name="column.scopedSlots" :record="record" :column="column" :index="index"></slot>
        </template>
      </template>
      <template #emptyText>{{ dataSource.noDataText || 'Không có dữ liệu' }}</template>
    </Table>
  </div>
</template>
