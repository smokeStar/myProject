<template>
  <div id="app">
    <first v-show="$store.state.isLogin"></first>
    <router-view></router-view>
  </div>
</template>

<script>
  import first from './components/first.vue'
  export default{
    data () { return {} },
    components: { first },
  }
</script>


<style>
body,html{
  margin: 0;
  padding:0;
  background-color: #D6D6D6;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 78%;
  margin: 0 auto;
  background-color: white;
  height: 100%;
}
.router-link-active{
  color: green;
}
</style>
