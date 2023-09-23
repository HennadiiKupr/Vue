<template>
  <p>Home Page</p>
</template>

<script>
  export default {
    unmounted() {
      console.log("home component unmounted")
    },
    activated() {
      console.log("home component activated")
    },
    deactivated() {
      console.log("home component deactivated")
    }
  }
</script>