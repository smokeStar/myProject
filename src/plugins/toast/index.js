import vueToast from "./toast.vue"
export default{
  install(Vue,options){
    const Toast = Vue.extend(vueToast);
    let toast = null;
    function $toast(tips){
      let tpl = new Toast();
      tpl.$mount();
      if(!tips) return alert('提示内容不能为空！');
      tpl.tips = tips;
      document.body.appendChild(tpl.$el);
    }
    window.$toast  = $toast;
  }

}


