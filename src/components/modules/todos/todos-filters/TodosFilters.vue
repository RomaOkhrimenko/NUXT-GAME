<template>
  <div class="todos-filters">
    <div class="todos-filters__input">
      <app-input v-model="filters.title" placeholder="Search" theme="secondary" />
    </div>
    <div class="todos-filters__select">
      <v-select  v-model="filters.completed" placeholder="Select todo status" :options="STATUSES_FILTER_DATA" :clearable="false"></v-select>
    </div>
    <div class="todos-filters__select">
      <v-select  v-model="filters.userId" placeholder="Select user" :options="todoUserIds" :clearable="false"></v-select>
    </div>

    <div class="todos-filters__button">
      <app-button>Create todo</app-button>
    </div>
  </div>
</template>

<script setup lang="ts">


import { reactive, watch } from 'vue'
import { STATUS_FILTERS_VALUE, STATUSES_FILTER_DATA } from 'components/modules/todos/todos-filters/constants'
import AppInput from 'components/modules/ui/app-input.vue'
import AppButton from 'components/modules/ui/app-button.vue'

defineProps<{todoUserIds: {id: number, userId: number}[]}>()


const emit = defineEmits(['filter:todos'])

const filters = reactive({
  title: '',
  completed: null,
  userId: null
})



watch(filters,  (val) => {
  const body = {
    title: val.title || null,
    completed: val.completed?.value,
    userId: val.userId?.value
  }

  if(body.completed === STATUS_FILTERS_VALUE.ALL) {
    body.completed = null
  }

  if(body.userId === 'all') {
    body.userId = null
  }

  emit('filter:todos', body)
})



</script>

<style lang="scss" scoped>
.todos-filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
}

.todos-filters__select {
  max-width: 300px;
  min-width: 200px;
  width: 100%;
  height: 100%;
}
</style>
