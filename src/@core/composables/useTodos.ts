import { ref } from 'vue'
import { useHttp } from './useHttp'
import { API } from '../api'
import { useTodosStore } from 'stores/todos'

export const useTodos = () => {
  const todosStore = useTodosStore()
  const isTodosLoading = ref(false)

  const getAllTodos = (params = {}, initUserIds = false) => {
    const { isLoading, execute } = useHttp()

    isTodosLoading.value = true
    execute({params, url: API.getTodosResource},
      (data) => {
        todosStore.setTodos(data)

        if(initUserIds) {
          todosStore.setTodosUsersId()
        }

        isTodosLoading.value = false

      })

    return {isLoading}
  }

  const addTodoToFavorite = (todoId) => {
    const favoriteTodos = JSON.parse(localStorage.getItem('favoriteTodos'))

    const updatedFavoriteTodos = favoriteTodos?.length ? JSON.stringify([...favoriteTodos, todoId]) : JSON.stringify([todoId])

    localStorage.setItem('favoriteTodos', updatedFavoriteTodos)

    todosStore.setFavoriteTodos(JSON.parse(updatedFavoriteTodos))
  }

  const initFavoriteTodos = () => {
    const favoriteTodos = JSON.parse(localStorage.getItem('favoriteTodos'))

    todosStore.setFavoriteTodos(favoriteTodos)
  }

  const getFavoriteTodos = (params = {}) => {
    const { isLoading, execute } = useHttp()

    isTodosLoading.value = true
    execute({params, url: API.getTodosResource},
      (data) => {
        const favoriteTodos = todosStore.favoriteTodos

        const filteredTodos = data.filter((item) => favoriteTodos?.includes(item.id))
        todosStore.setTodos(filteredTodos)

        isTodosLoading.value = false
      })

    return {isLoading}
  }

  const createTodo = (todo) => {
    todosStore.addTodo(todo)
  }


  return {getAllTodos, isTodosLoading, addTodoToFavorite, initFavoriteTodos, getFavoriteTodos, createTodo}
}
