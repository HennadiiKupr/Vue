<template>
  <div>
    <p>The user is {{ age }} years old</p>
    <button type="button" @click="age++">Update Age</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: ["age"]
  }
</script>
