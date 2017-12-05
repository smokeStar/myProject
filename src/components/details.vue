<template>
  <div class="detail" >

    <div class="content" v-html="html"></div>
  </div>
</template>

<script>

    export default {
        data (){
            return{
                title:'',
                describe:null,
                date:null,
                html:null
            }
        },
        beforeRouteEnter:function (to,from,next){
        	  let params = { id : to.query.id };
            next((vm)=>{
              vm.$http.get('https://wenjianblog.herokuapp.com/api/article/detail?op=get',{ params })
                .then(res=>{
                  if(!res || !res.data ) return;
                  vm.html = res.data
                });
            });
        }

    }
</script>

<style lang="scss" >

 /*.content pre {
    background-color: #eee;
    overflow-x: scroll;
    padding: 0.2rem 0.3rem;
  }
.content blockquote > p{
    position: relative;
    overflow: visible;
  }
.content blockquote > p::after {
    content: '';
    position: absolute;
    left: -20px;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: #ddd;
  }*/
 .content{
   h1{
     font-size: 20px;
   }
   h2{
     font-size:16px;
   }
   font-size: 14px;
   line-height: 180%;
   blockquote{
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
     border-left: 4px solid gainsboro;
     padding-left: 20px;
     margin-left: 0;
   }
   blockquote>blockquote{
     margin-left: 0;
   }
   pre {
     overflow: auto;
     padding: 25px;
     box-sizing: border-box;
     border-radius: 3px;
     background-color: #f6f8fa;
     font-size: 95%;
     line-height: 1.45;
   }
   code{
     background-color: #f6f8fa;
     padding:2px 10px;
   }

 }



</style>
