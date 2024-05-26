<template>
  <div class="app-input" :class="[{}, classList]">
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      v-bind="$attrs"
      :placeholder="placeholder"
      @keydown.space="handleSpace"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppInput',
  props: {
    name: {
      required: true,
      type: String,
    },
    type: {
      required: false,
      type: String,
      default: 'text',
    },
    preventSpacing: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      required: false,
      type: String,
      default: '',
    },
    placeholder: {
      required: false,
      type: String
    },
    validationModel: {
      required: false,
      type: Object,
      default: () => {},
    },
    defaultValue: {
      type: String,
      default: '',
    },
    theme: {
      required: false,
      type: String,
    },
  },

  data() {
    return {
      themes: {
        default: 'default',
      },
    }
  },
  computed: {
    classList() {
      return this.themes[this.theme]
    },
  },
  methods: {
    handleSpace(event) {
      if (this.preventSpacing) {
        event.preventDefault()
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.app-input {
  display: flex;
  border-radius: 8px;

  input {
    font-size: 16px;
    padding: 8px;
    width: 100%;
    border: none;
  }
}
</style>
