<template>
  <form class="creat-todo-form" @submit.prevent="handleSubmit">
    <h2>Create Todo Form</h2>

    <div class="creat-todo-form__inputs">
      <app-input-validator :errors="v$.userId?.$errors">
        <app-input theme="secondary" v-model="formFields.userId" name="userId" placeholder="User ID" prevent-spacing />
      </app-input-validator>

      <app-input-validator :errors="v$.title?.$errors">
        <app-input theme="secondary" v-model="formFields.title" name="title" placeholder="Title" />
      </app-input-validator>
    </div>

    <div class="creat-todo-form__submit">
      <app-button :disabled="loading">Add</app-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import AppInput from '../../../ui/app-input.vue'
import AppInputValidator from '../../../ui/app-input-validator.vue'
import { reactive, toRaw, toRefs } from 'vue'
import { helpers, required, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import AppButton from 'components/modules/ui/app-button.vue'
import { useTodos } from '@core/composables/useTodos'
import { useLoading } from '@core/composables/useLoading'

const {createTodo} = useTodos()
const {loading, setLoading, resetLoading} = useLoading()

const formFields = reactive({
  userId: null,
  title: ''
})

const rules = {
  userId: { required: helpers.withMessage('This field is required', required), maxLength: maxLength(10)},
  title: { required: helpers.withMessage('This field is required', required)},
}

const v$ = useVuelidate(rules, formFields)

const handleSubmit = async () => {
  const noErrors = await v$.value.$validate()

  if (!noErrors) return

  const id = Date.now()


  const newTodo = {...toRaw(formFields), id}

  setLoading(true)
  createTodo(newTodo)
  resetLoading(false)
  resetForm()

}

const resetForm = () => {
  v$.value.$reset()
  formFields.title = ''
  formFields.userId = null
}
</script>

<style lang="scss" scoped>
.creat-todo-form {
  max-width: 300px;
  h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
}

.creat-todo-form__inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
