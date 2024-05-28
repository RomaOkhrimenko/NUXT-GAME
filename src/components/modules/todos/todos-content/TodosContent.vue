<template>
  <div class="todos-content">
    <h2>Todos</h2>

    <div class="todos-content__filters-container">
      <todos-filters :todoUserIds="todosStore.todosUsersId" @filter:todos="handleTodosFilter" />
    </div>

    <div class="todos-content__create-todo">
      <CreateTodo />
    </div>

    <h4 v-if="isTodosLoading">TODOS LOADING...</h4>
    <todo-list v-else :todos="todosStore.todos" />

  </div>
</template>

<script setup lang="ts">

import TodoList from '../todo-list/TodoList.vue'
import { useTodos } from '@core/composables/useTodos'
import TodosFilters from 'components/modules/todos/todos-filters/TodosFilters.vue'
import { useTodosStore } from 'stores/todos'
import { STATUS_FILTERS_VALUE } from 'components/modules/todos/todos-filters/constants'
import CreateTodo from 'components/modules/todos/create-todo/CreateTodo.vue'

const todosStore = useTodosStore()

const {getAllTodos, isTodosLoading, initFavoriteTodos, getFavoriteTodos} = useTodos()

getAllTodos({}, true)
initFavoriteTodos()
todosStore.setTodosUsersId()

const handleTodosFilter = (filters) => {

  if(filters.completed === STATUS_FILTERS_VALUE.FAVORITE) {
    getFavoriteTodos({...filters, completed: null})
  } else {
    getAllTodos(filters)
  }
}

</script>

<style lang="scss" scoped>
.todos-content {
    h2 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 40px;
    }

}

.todos-content__filters-container {
  margin-bottom: 40px;
}

.todos-content__create-todo {
  margin-bottom: 40px;
}
</style>
