<template>
  <div class="todo-item" :class="{completed: completed, favorite: isAddedToFavorite}">
    <h2>{{title}}</h2>
    <span>{{todoStatus}}</span>
    <b>user id: {{userId}}</b>

    <div class="todo-item_button">

      <button v-if="!isAddedToFavorite" @click="onAddToFavorite">add to favorite</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodos } from '@core/composables/useTodos'

const props = defineProps<{title: string, completed: boolean, id: number, userId: number, isAddedToFavorite: boolean}>()
const {addTodoToFavorite} = useTodos()

const todoStatus = computed(() => {
  return props.completed ? 'Completed' : 'Incomplete'
})


const onAddToFavorite = () => {
  addTodoToFavorite(props.id)
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: inline-block;
  position: relative;
  padding: 30px 20px 0;
  box-shadow: 0 0 5px red;

  span {
    position: absolute;
    top: 5px;
    right: 5px;
    color: red;
  }

  b {
    position: absolute;
    left: 5px;
    top: 5px;
  }

  .todo-item_button {
    display: flex;
    justify-content: flex-end;
  }

  button {
    outline: none;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  &.completed {
    box-shadow: 0 0 5px green;
    span {
      color: green;
    }
  }

  &.favorite {
    box-shadow: 0 0 5px yellow;
    padding-bottom: 20px;
  }

}
</style>
