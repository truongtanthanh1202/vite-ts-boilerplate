<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <div class="page">
    <div class="headline text-[20px] px-3 py-5 flex justify-between">
      <h3 class="font-medium">Shop lives</h3>

      <Button type="primary" class="rounded-sm px-2">
        <SearchOutlined />
        Tìm kiếm
      </Button>
    </div>
  </div>
</template>
