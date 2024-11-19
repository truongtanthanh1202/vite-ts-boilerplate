<template>
  <div class="p-4 flex flex-col gap-4">
    <div>
      <div class="text-[#5c5c5c] font-medium mb-2">Hình thức thông báo</div>
      <RadioGroup v-model:value="tab" button-style="solid">
        <RadioButton :value="1">Thông báo</RadioButton>
        <RadioButton :value="2">Tin nhắn SMS</RadioButton>
        <RadioButton :value="3">Zalo (ZNS)</RadioButton>
        <RadioButton :value="4">Tin nhắn Gchat</RadioButton>
        <RadioButton :value="5">Email</RadioButton>
      </RadioGroup>
    </div>

    <div>
      <div class="text-[#5c5c5c] font-medium mb-2">Tên chiến dịch</div>
      <Input placeholder="Nhập tên chiến dịch"></Input>
    </div>

    <div>
      <div class="text-[#5c5c5c] font-medium mb-2">Nội dung chiến dịch</div>
      <QuillEditor theme="snow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioButton, RadioGroup, Input } from 'ant-design-vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { ref } from 'vue';

const tab = ref<number>();
</script>

<style scoped lang="scss" src="./styles.scss"></style>
