<template>
  <div class="auth-page">
    <auth-form />
  </div>
</template>

<script setup lang="ts">

import AuthForm from 'components/modules/auth/form/auth-form.vue'
</script>

<style lang="scss" scoped>
.auth-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}
</style>
