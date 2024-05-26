<template>
  <div
    class="app-input-validator"
    :class="{ error: errors?.length }"
  >
    <slot></slot>
    <div v-for="error of props.errors" :key="error.$uid" class="input-errors">
      <div class="error-message">{{ error.$message }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  errors: Array,
})
</script>

<style lang="scss" scoped>
.app-input-validator {
  display: flex;
  flex-direction: column;

  .input-errors {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .error-message {
    color: red;
  }

}
</style>
