<template>
  <div id="app">
    <first v-show="$store.state.isLogin"></first>
    <transition name="router">
      <router-view class="routerView"></router-view>
    </transition>
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
.routerView{
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.router-enter-active{
  -webkit-transform: scale(30px);
  -moz-transform: translateX(30px);
  -ms-transform: translateX(30px);
  -o-transform: translateX(30px);
  transform: translateX(30px);
  opacity: 0;
}
.router-leave-active{
  -webkit-transform: translateX(-30px);
  -moz-transform: translateX(-30px);
  -ms-transform: translateX(-30px);
  -o-transform: translateX(-30px);
  transform: translateX(-30px);
  opacity:0;
}
</style>
