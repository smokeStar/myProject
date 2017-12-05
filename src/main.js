import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import item from './components/item.vue'
import scroll from './components/scroll.vue'
import VueLoading from './plugins/loading'
import VueConfirm from './plugins/confirm'
import VueToast from './plugins/toast'
import store from './store'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(VueLoading , { container: '#app' });
Vue.use(VueConfirm);
Vue.use(VueToast);
// Vue.use(Mock);
Vue.prototype.$http = axios;
axios.defaults.withCredentials=true;
axios.interceptors.response.use(response=>{
  loading();
  setTimeout(function (){
        loading.end();
      },500);
  if(response.data.error && response.data.error == 'timeout'){
    $toast('登录超时,请重新登录!');
    return router.replace('/login');
  }else{
    return response;
  }
},error=>{
  loading();
  setTimeout(function (){
        loading.end();
        $toast('系统错误');
      },2000);
});

Vue.config.productionTip = false;
Vue.component('item' , item);
Vue.component('scroll' , scroll);

window.vm =new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

router.beforeEach(function(to, from, next){   // 404 页面处理
     console.log(to);
     if(!vm.$store.state.isLogin && to.fullPath != '/login' && to.fullPath != '/register'){
       $toast('你还未登录!');
       next({ path:'/login' });
       return;
     }
     if(!to.matched.length){
       console.log('没有匹配到路由!');
       next({ path:'/error'});
     }else{
       console.log(to.fullPath);
       next();
     }
});

