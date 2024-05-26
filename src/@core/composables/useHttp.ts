import axios from '@core/axios/axios.ts'
import { ref } from 'vue'

const DEFAULT_OPTIONS = {
  method: 'GET',
  showErrorToast: true,
  params: {},
}

const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms))

export const useHttp = (options) => {
  let opts = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  let data = ref(null)
  let error = ref(null)
  let isLoading = ref(false)
  let isReady = ref(false)

  const onError = (err) => {
    console.error(err)
    error.value = err
    opts.showErrorToast && alert(handledError)

    isReady.value = false
    isLoading.value = false

    throw err
  }
  const onSuccess = (response) => {
    data.value = response.data

    isLoading.value = false
    isReady.value = true
  }

  const execute = async (
    { params = {}, url = null, payload = {} },
    successCallback = () => {},
    errorCallback = () => {}
  ) => {
    try {
      isLoading.value = true

      const response = await axios({
        method: opts.method,
        params: params ?? {},
        url,
        data: payload,
      })

      onSuccess(response)
      successCallback(data.value)
    } catch (error) {
      errorCallback(error)
      onError(error)
    }
  }

  return { data, isLoading, isReady, execute, error }
}
