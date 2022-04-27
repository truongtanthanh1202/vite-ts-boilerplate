<template>
  <div class="dataTable">
    <div v-if="dataSource.extras.processing" class="loading-spinner">
      <Spin />
      <span>Đang lấy dữ liệu...</span>
    </div>
    <div v-else>
      <div>
        <table class="table-auto dataTable__table">
          <thead>
            <tr>
              <th
                v-for="(item, rowIndex) in dataSource.columns"
                :key="rowIndex"
                :width="item.width"
                scope="col"
              >
                {{ item.title }}
              </th>
            </tr>
          </thead>
          <!-- if data not empty -->
          <tbody v-if="dataSource.data && dataSource.data.length !== 0">
            <tr v-for="(row, rowIndex) in dataSource.data" :key="rowIndex">
              <td v-for="(column, columnIndex) in dataSource.columns" :key="columnIndex">
                <slot v-if="column.scopedSlots" :name="column.scopedSlots" :record="row"></slot>
                <span v-else>{{ getColumnValue(row, rowIndex, column, columnIndex) }}</span>
              </td>
            </tr>
          </tbody>

          <!-- no data -->
          <tbody v-else>
            <tr>
              <td class="dataTable__noData" :colspan="dataSource.columns.length">
                {{ dataSource.extras.noDataText || 'Không có dữ liệu' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dataTable__footer">
        <div v-if="paginator.total > 0" class="paginator">
          <div class="paginator__info">
            <b>{{ indexFromToPaginator.from }}-{{ indexFromToPaginator.to }} / {{ paginator.total }} </b>
            {{ paginator.textHint }}
          </div>
          <!-- <b-pagination
            :value="paginator.currentPage"
            :total-rows="paginator.total"
            :per-page="paginator.perPage"
            first-number
            last-number
            page-class="paginator__pageItem"
            prev-class="paginator__pageItem"
            next-class="paginator__pageItem"
            ellipsis-class="paginator__pageItem"
            @change="handleChangePage($event)"
          ></b-pagination> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { get } from 'lodash';
import { Spin } from 'ant-design-vue';

import { IColumn, IDataSource, IPaginator } from './types';

export default defineComponent({
  name: 'DataTable',

  components: {
    Spin,
  },

  props: {
    dataSource: {
      type: Object as PropType<IDataSource>,
      required: true,
    },
  },

  emits: ['pageChange'],

  computed: {
    paginator() {
      return this.dataSource.paginator;
    },

    indexFromToPaginator() {
      const paginator: IPaginator = this.dataSource.paginator;

      // get from page
      const from: number = (paginator.currentPage - 1) * paginator.perPage + 1;

      // get to page
      const to: number =
        paginator.currentPage * paginator.perPage < paginator.total
          ? paginator.currentPage * paginator.perPage
          : paginator.total;

      return { from, to };
    },
  },

  methods: {
    handleChangePage(page: number) {
      this.$emit('pageChange', page);
    },

    getColumnValue(rowData: object, rowIndex: number, column: IColumn, columnIndex: number) {
      if (this.dataSource.columns[columnIndex]) {
        const columnKey: string | undefined = this.dataSource.columns[columnIndex].key;

        // not specify key
        if (!columnKey) {
          return null;
        }

        const value = get(rowData, columnKey);

        if (column.render) {
          return column.render(value, rowData, rowIndex);
        }

        return value;
      }
    },
  },
});
</script>

<style scoped lang="scss" src="./styles.scss"></style>
