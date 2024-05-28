<template>
  <div class="todo-list">

    <ul v-if="todos.length" class="todos-container">
      <li :key="todo.id" v-for="todo in todos">
        <todo-item  :title="todo.title" :completed="todo.completed" :id="todo.id" :user-id="todo.userId" :is-added-to-favorite="todosStore.favoriteTodos?.includes(todo.id)" />
      </li>
    </ul>

    <h3 v-else>Todo list is empty</h3>
  </div>
</template>

<script setup lang="ts">
import TodoItem from 'components/modules/todos/todo-item/TodoItem.vue'
import { useTodosStore } from 'stores/todos'

defineProps<{todos: {id: number, title: string, completed: boolean}[]}>()

const todosStore = useTodosStore()
</script>

<style lang="scss" scoped>


.todos-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}
</style>
