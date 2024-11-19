<template>
  <Dropdown
    v-model:open="visibleDrop"
    :trigger="['click']"
    :overlay-style="{ width: 'fit-content', minWidth: 'none !important' }"
  >
    <div
      class="h-10 w-full border border-[#d9d9d9] border-solid rounded flex items-center justify-between gap-2 overflow-hidden pr-3 pl-2.5 transition-colors hover:border-ghtk cursor-text"
    >
      <div v-if="!size(selectedValue)" class="grow overflow-hidden truncate text-black/25">
        {{ props?.placeholder || 'placeholder' }}
      </div>

      <div v-else class="grow overflow-hidden text-black/85 flex items-center gap-1">
        <div
          v-for="(item, index) in selectedValue"
          :key="index"
          class="py-1 px-2 rounded-sm bg-[#F4F4F4] border border-solid border-[#D9D9D9] shrink-0"
        >
          {{ find(props.options, (option) => option.value === item)?.label }}
        </div>
      </div>

      <CheveronIcon class="text-[#5c5c5c] shrink-0" />
    </div>

    <template #overlay>
      <div class="drop-shadow-xl p-4 bg-white rounded flex flex-col gap-4">
        <Checkbox v-model:checked="isSelectAll" @change="(e) => handleSelectAll(e.target.checked)">
          Tất cả
        </Checkbox>
        <CheckboxGroup v-model:value="selectedValue" class="flex flex-col gap-4 self-start">
          <div v-for="(item, index) in props?.options || []" :key="index">
            <Checkbox :value="item?.value">{{ item?.label }}</Checkbox>
          </div>
        </CheckboxGroup>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { CheveronIcon } from '@/shared/icons';
import { Dropdown, Checkbox, CheckboxGroup } from 'ant-design-vue';
import { map, size, find } from 'lodash';
import { onMounted, ref, watch } from 'vue';

interface IProps {
  placeholder?: string;
  options?: any[];
}

const props = defineProps<IProps>();
const selectedValue = defineModel<any[]>('value', { default: [] });

const visibleDrop = ref<boolean>(false);
const isSelectAll = ref<boolean>(false);

onMounted(() => {
  if (size(selectedValue.value) === size(props.options)) isSelectAll.value = true;
});

watch(selectedValue, () => {
  if (size(selectedValue.value) === size(props.options)) {
    isSelectAll.value = true;
  } else {
    isSelectAll.value = false;
  }
});

function handleDeleteItem(value) {}

function handleSelectAll(value) {
  if (value) {
    selectedValue.value = map(props.options, (item) => item?.value);
  } else {
    selectedValue.value = [];
  }
}
</script>
