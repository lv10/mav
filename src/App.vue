<template>
  <div id="app">
    <age></age>
    <growth></growth>
  </div>
</template>

<script>
import age from './components/age'
import growth from './components/growth'

export default {
  name: 'app',
  components: {
      age, growth
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
