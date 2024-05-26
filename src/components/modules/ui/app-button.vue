<template>
  <button
    v-if="!router"
    class="app-button"
    :class="classList"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span><slot /></span>
  </button>
  <router-link
    v-else
    class="app-button"
    :class="classList"
    :to="to"
  >
    <span><slot /></span>
  </router-link>
</template>
<script>
export default {
  inheritAttrs: true,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      required: false,
      type: String,
      default: 'default',
    },

    to: {
      required: false,
      type: Object,
      default: () => ({
        name: 'home',
      }),
    },

    router: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    themes: {
      default: 'default',
    },

  }),
  computed: {
    classList() {
      return [
        this.themes[this.theme]
      ]
    },
  },
  emits: ['click'],
}
</script>

<style lang="scss" scoped>
.app-button {
  width: 100%;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: none;
  &.default {
    background-color:
      rgba(81, 153, 69, 1);
  }
}
</style>
