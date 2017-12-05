import vueConfirm from "./confirm.vue"
export default{
  install(Vue,options){
    const Confirm = Vue.extend(vueConfirm);
    let confirm = null;
    function $confirm(tips,ensure,cancle){
      let tpl = new Confirm();
      tpl.$mount();
      if(!tips) return alert('提示内容不能为空！');
      tpl.tips = tips;
      if(typeof ensure == 'function'){
        tpl.ensureFn = ensure;
      }
      if(typeof cancle == 'function'){
        tpl.cancleFn = cancle;
      }

      document.body.appendChild(tpl.$el);
    }
    window.$confirm  = $confirm;
  }

}


