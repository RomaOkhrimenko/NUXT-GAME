<template>
  <div>
    <h2>User Information</h2>
    <ul>
      <li>Name: {{user.name}}</li>
      <li>Username: {{user.username}}</li>
      <li>Email: {{user.email}}</li>
      <li>Phone: {{user.phone}}</li>
      <li>Website: <a :href="`https://${user.website}`" target="_blank">{{user.website}}</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useAuth from '@core/auth/useAuth'
import { onBeforeMount, onMounted, ref } from 'vue'

const {authService} = useAuth()

const user = ref()

onBeforeMount(() => {
  user.value = authService.getUser()
})
</script>

<style lang="scss" scoped>
h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
