<template>
  <Modal
    ref="gModalRef"
    v-model:open="modalOpen"
    class="gModalUnique"
    centered
    v-bind="{
      bodyStyle: { padding: 0 },
      footer: null,
      closable: false,
      width: width,
      ...$attrs,
    }"
  >
    <slot name="header">
      <div v-if="title" class="relative flex justify-center items-center bg-ghtk rounded-t">
        <div class="text-white font-medium text-lg py-2.5">
          {{ title }}
        </div>
        <div
          v-if="closable"
          class="absolute right-4 cursor-pointer text-white flex items-center"
          @click="handleClickClose"
        >
          <CloseOutlined />
        </div>
      </div>
    </slot>
    <slot></slot>
    <slot v-if="footer" name="footer"></slot>
  </Modal>
</template>
<script setup lang="ts">
import { CloseOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';

interface IProps {
  closable?: boolean;
  footer?: boolean;
  title?: string;
  width?: number;
}

withDefaults(defineProps<IProps>(), {
  closable: true,
  footer: true,
  width: 600,
  title: '',
});

defineOptions({
  inheritAttrs: false,
});
defineExpose({ show, hide, getState });

const emits = defineEmits(['onClickCloseButton']);

const modalOpen = defineModel<boolean>('open', { default: false });

function show() {
  modalOpen.value = true;
}

function handleClickClose() {
  emits('onClickCloseButton');
  hide();
}

function hide() {
  modalOpen.value = false;
}

function getState() {
  return {
    open: modalOpen.value,
  };
}
</script>

<style lang="scss" src="./styles.scss"></style>
