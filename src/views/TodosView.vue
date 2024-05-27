<template>
  <div class="todos-page">
    <div class="user-information__container">
      <user-information />
    </div>

    <todos-content />

  </div>
</template>

<script setup lang="ts">

import UserInformation from 'components/modules/todos/user-information/UserInformation.vue'
import TodosContent from 'components/modules/todos/todos-content/TodosContent.vue'
</script>

<style lang="scss" scoped>
.todos-page {
  padding: 20px;

  .user-information__container {
    margin-bottom: 50px;
  }
}
</style>
