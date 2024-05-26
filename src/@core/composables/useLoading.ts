import { ref } from 'vue'

export const useLoading = () => {
  const loading = ref(false)

  const setLoading = () => (loading.value = true)
  const resetLoading = () => (loading.value = false)

  return {
    loading,
    setLoading,
    resetLoading,
  }
}
