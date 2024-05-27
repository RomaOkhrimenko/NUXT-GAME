import { defineStore } from 'pinia'
export const useTodosStore = defineStore('todos', {
  state: () => {
    return {
      todos: null,
      todosUsersId: [],
      favoriteTodos: []
    }
  },

  actions: {
    setTodos(todos) {
      this.todos = todos
    },

    setFavoriteTodos(favoriteTodos) {
      this.favoriteTodos = favoriteTodos
    },

    clearTodos() {
      this.todos = null
    },

    setTodosUsersId() {
      const uniqueIds = new Set();
      const uniqueArray = [];

      this.todos?.forEach(item => {
        if (!uniqueIds.has(item.userId)) {
          uniqueIds.add(item.userId);
          uniqueArray.push({ value: item.userId, label: item.userId });
        }
      });

      uniqueArray.unshift({value: 'all', label: 'All Users' });

      this.todosUsersId = uniqueArray;
    },
  },
})
