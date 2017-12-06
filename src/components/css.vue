<template>
  <div id="css">
    <item :item="items"></item>
  </div>
</template>

<script>
  import  {mapMutations} from 'vuex'
//  import data from '../utils/mock'
  export default {
    data () {
      return {
        items: []
      }
    },
    mounted: function () {
      let params = { type : 'Css'};
      this.$http.get('http://localhost:8088/api/article/description?op=get',{params})
        .then(res=>{
          if(!res || !res.data || !res.data.ok) return;
          this.items=res.data.data;
          this.items.forEach(function(i){
            if(i.des.length>103) i.des = i.des.substring(0,103)+'...'; // 超过103个子省略并加上...
          })
      })
    },
    methods:{
      ...mapMutations([
          'TODOSTH'
        ]),
        add:function(){
            let test = this.$store.state.arr;
            let arr = [1,2,...test];
            this.$http.post('http://g.cn',"type=top&key=123456").then(function(data){
               console.log(data);
              this.TODOSTH({name:data.body.name,sex:data.body.sex,age:data.body.age});
            });
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>
