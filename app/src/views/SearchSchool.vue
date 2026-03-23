<template>
  <div>
    <h2>Search</h2>
    <div>
      <form action="submit" @submit.prevent="login(user)">
        <label for="username">Username</label>
        <input type="text" v-model="user.username" />
        <button class="login" type="submit">login</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
