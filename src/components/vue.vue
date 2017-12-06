<template>
  <div id="vue">
   <item :item="items"></item>
  </div>
</template>

<script>
  export default {
    data () { return { items: [] } },

    mounted: function () {
      this.$http('http://localhost:8088/api/article/description?type=Vue')
        .then( res=>{
          if(!res || !res.data || !res.data.ok) return;
          this.items = res.data.data;
          this.items.forEach(function(i){
            if(i.des.length>103) i.des = i.des.substring(0,103)+'...'; // 超过103个子省略并加上...
          })
      })
        .catch( err=>{
          $toast(err);
      })
    },
    methods:{
        // 高德反地理位置编码接口
        map(){
            this.$http.jsonp('https://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location',{
              params:{
                output:'json',
                ak:'wtqfBcnBsdeIbLjMD3BhxIASMlSiG0bi',
                callback:'showLocation'
              }
            }).then(function(res){
                console.log(res);
            })
        }
    }
  }
</script>

<style lang="scss" scoped>
  .item{
    margin-bottom:20px;
    .title{

      color: #9ec09f;
      font-size: 22px;
      font-family: 微软雅黑;
      line-height: 22px;
    }
    img{
      width: 95%;
      margin: 20px 0 10px;
    }
    .time{
      color: #a0a0a0;
      font-size: 14px;
      line-height: 14px;
      margin: 0 0 10px 0;
    }
    .describe{
      color: #3f3f3f;
      font-size: 14px;
      width: 100%;
    }

  }

</style>
