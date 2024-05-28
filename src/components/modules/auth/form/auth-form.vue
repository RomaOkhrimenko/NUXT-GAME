<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <div class="auth-form__title">
      <h2>description</h2>
    </div>
    <div class="auth-form__inputs">
      <span>description</span>
      <app-input-validator :errors="v$.username?.$errors">
        <app-input v-model="formFields.username" name="username" placeholder="Username" prevent-spacing />
      </app-input-validator>

      <app-input-validator :errors="v$.phone?.$errors">
        <app-input v-model="formFields.phone" name="phone" placeholder="Phone Number" />
      </app-input-validator>
    </div>
    <div class="auth-form__submit">
      <app-button :disabled="loading">Login</app-button>
    </div>
  </form>
</template>

<script setup lang="ts">

import AppInput from 'components/modules/ui/app-input.vue'
import AppButton from 'components/modules/ui/app-button.vue'
import { reactive } from 'vue'
import AppInputValidator from 'components/modules/ui/app-input-validator.vue'
import { required, alpha, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import useAuth from '@core/auth/useAuth'
import { useLoading } from '@core/composables/useLoading'
import {  useRouter } from 'vue-router'

const numAndSymbolsValidator = helpers.regex(/^[\d!@#\$%\^\&\*\(\)\-_=\+\[\]\{\};:'",<>\.\?\/\\\|\`~]+$/);

const {authService} = useAuth()
const {setLoading, loading, resetLoading} = useLoading()
const router = useRouter()

const formFields = reactive({
  username: null,
  phone: null,
})

const rules = {
  username: { required: helpers.withMessage('This field is required', required), alpha: helpers.withMessage('This field must contain only letters', alpha)},
  phone: { required: helpers.withMessage('This field is required', required), numAndSymbols: helpers.withMessage('This field must contain numeric or symbols', numAndSymbolsValidator) },
}

const v$ = useVuelidate(rules, formFields)

const handleSubmit = async () => {
  const noErrors = await v$.value.$validate()

  if (!noErrors) return

  setLoading()
  await authService.login(formFields).then((user) => {
    authService.setUser(user)
    router.push('/todos')
  }).catch((e) => {
    alert(e.message)
  }).finally(() => resetLoading())
}
</script>

<style lang="scss" scoped>
.auth-form {
  max-width: 447px;
  width: 100%;
  background-color: rgba(195, 195, 195, 1);
  padding-bottom: 20px;
}

.auth-form__title {
  background-color: rgba(165, 165, 165, 1);
  text-align: center;
  padding: 15px 0;
  margin-bottom: 20px;
}

.auth-form__inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
  margin-bottom: 20px;
}

.auth-form__submit {
  padding: 0 20px;
}
</style>
