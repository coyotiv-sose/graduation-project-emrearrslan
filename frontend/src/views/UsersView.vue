<script setup>
import axios from 'axios'

const { data: users } = await axios.get('http://localhost:3000/users')
</script>

<template>
  <div class="users">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #533333;
}
</style>
