<template>
  <transition name="show">
    <div class="toastBox"  v-if="show">
      <div class="tips">
        <div>
          <img src="../../../static/notice.png" >
        </div>
        <div>
          <span>{{ tips }}</span>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
    export default {
        data () {
            return {
                show:false,
                tips:'你确定要删除该项吗？'
            }
        },
      mounted:function (){
        this.show = true;
        var that= this;
        setTimeout(function (){
          that.show=false;
        },2000)
      }

    }
</script>

<style lang="scss" scoped>
  @mixin prix($proprety,$value){
    -webkit-#{$proprety}:$value;
    -moz-#{$proprety}:$value;
    -ms-#{$proprety}:$value;
    #{$proprety}:$value;
  }

  .toastBox{
    z-index:10;
    width: 250px;
    height:40px;
    background-color: white;
    box-shadow: 0 2px 8px 1px rgba(116,116,116,.5);
    -webkit-border-radius:3px;
    -moz-border-radius:3px;
    border-radius:3px;
    position: fixed;
    top:75px;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%) ;
    -moz-transform:translateY(-50%) translateX(-50%) ;
    -ms-transform:translateY(-50%) translateX(-50%) ;
    -o-transform:translateY(-50%) translateX(-50%) ;
    transform:translateY(-50%) translateX(-50%) ;

    }
  .show-enter-active,.show-leave-active{
    transition:top .5s ease-in;
    overflow: hidden;
  }
  .show-enter{
    top:-50px;
  }
  .show-leave-active{
    top:-50px;
  }
    .tips{

      @include prix(display,flex);
      @include prix(justify-content,center);
      @include prix(align-items,center);
      font-size: 14px;
      color: gray;
      height: 40px;
      div:first-child{
        width: 18%;
        display: inline-block;
        height: 100%;
        background-color:skyblue;
        text-align: center;
      }
      div:last-child{
        width: 82%;
        height: 100%;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      img{
        display: inline-block;
        width: 32px;
        height:32px;
        margin-top: 4px;
        line-height: 40px;
      }
    }





</style>
