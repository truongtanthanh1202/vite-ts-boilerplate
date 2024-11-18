<template>
  <Modal
    class="noti-popup no-padding max-w-[400px] text-black"
    :open="visible"
    centered
    :footer="null"
    :closable="false"
    :maskClosable="true"
  >
    <div class="w-full relative text-black">
      <div class="pt-4 text-center text-sm font-medium">{{ notiTitle }}</div>
    </div>

    <div class="py-4 flex justify-center items-center">
      <img class="w-[150px] h-[135px]" :src="notiIcon" alt="icon" />
    </div>
    <div class="text-black px-4 text-sm" :style="messageStyle" v-html="sanitizeHTML(config.message)"></div>
    <div
      class="button-wrapper"
      :class="{
        confirm: config.type === 'confirm',
        'btn-reverse': config.reverse,
      }"
    >
      <button
        v-if="!config.isHideClose"
        class="popupAction popupAction__close text-center !text-sm"
        :class="config.closeClass"
        :style="config.closeStyle"
        @click="handleCancel"
      >
        {{ config.closeText }}
      </button>
      <button
        v-if="config.type === 'confirm'"
        class="popupAction popupAction__confirm text-center !text-sm"
        @click="handleConfirm"
      >
        {{ config.confirmText }}
      </button>
    </div>
  </Modal>
</template>
<script setup lang="ts">
import { Modal } from 'ant-design-vue';

import { ref, reactive, computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { sanitizeHTML } from '@/helpers';
import { isEmpty, size } from 'lodash';
import { eventBus } from '@/shared/common';
import ExplainIcon from '@/assets/images/popup/explain_icon.png';
import ConfirmIcon from '@/assets/images/popup/confirm_icon.png';
import ErrorIcon from '@/assets/images/popup/error_icon.png';
import SuccessIcon from '@/assets/images/popup/success_icon.png';

const POPUP_TYPE = {
  ERROR: 'error',
  SUCCESS: 'success',
  EXPLAIN: 'explain',
  CONFIRM: 'confirm',
};

const DEFAULT_CONFIG = Object.freeze({
  message: 'Message',
  rawMessage: false,
  reverse: false,
  type: POPUP_TYPE.EXPLAIN,
  confirmText: 'Xác nhận',
  closeText: 'Đóng',
  cancelText: 'Hủy',
  confirmed: () => {},
  canceled: () => {},
  closeClass: '',
  closeStyle: '',
  isHideClose: false,
  title: '',
});

const config = reactive({ ...DEFAULT_CONFIG });

const visible = ref(false);

onBeforeMount(() => {
  eventBus.$on('openNotiPopup', openPopup);
  eventBus.$on('closeNotiPopup', close);
});

function openPopup(option) {
  setOptionToState(option);
  visible.value = true;
}

function setOptionToState(option) {
  if (isEmpty(option)) {
    return;
  }

  Object.keys(option).forEach((key) => {
    if (key === 'message') {
      config[key] = option[key]?.replace(/(?:\r\n|\r|\n)/g, '<br>');
      return;
    }
    config[key] = option[key];
  });
}

function close() {
  visible.value = false;
}

const messageStyle = computed(() => {
  const regex = /\. |\? |! /g;
  const message = config.message;
  if (!message) {
    return '';
  }
  const sentenceCount = size(message?.split(regex));
  if (sentenceCount <= 1) {
    return 'text-align: center;';
  }
  return '';
});

const notiTitle = computed(() => {
  return config.title;
});

const notiIcon = computed(() => {
  let notiImage = '';
  switch (config.type) {
    case POPUP_TYPE.ERROR:
      notiImage = ErrorIcon;
      break;
    case POPUP_TYPE.SUCCESS:
      notiImage = SuccessIcon;
      break;
    case POPUP_TYPE.EXPLAIN:
      notiImage = ExplainIcon;
      break;
    case POPUP_TYPE.CONFIRM:
      notiImage = ConfirmIcon;
      break;
  }
  return notiImage;
});

const handleConfirm = () => {
  config.confirmed();
  close();
};

function handleCancel() {
  config.canceled();
  close();
}

onBeforeUnmount(() => {
  eventBus.$off('openNotiPopup', openPopup);
  eventBus.$off('closeNotiPopup', close);
});
</script>
<style src="./styles.scss" lang="scss" scoped></style>
<style lang="scss">
.noti-popup {
  .ant-modal-content {
    padding: 0 !important;
  }
}
</style>
