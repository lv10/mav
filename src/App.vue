<template>
  <div id="app">
    <h1>Maria Aracelly Tracker</h1>
    <age ></age>
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
  margin-top: 60px;
  align-items: center;
  bottom: 0;
  background-color: #34495e;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top:0;

  .text {
    color: #ecf0f1;
    font-size: 30px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
