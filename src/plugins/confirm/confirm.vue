<template>
  <div id="bg" v-if="show">
    <div class="confirmBox">
      <div class="warn">
        <div class="title">提示</div>
        <div class="close" @click="show=false">X</div>
      </div>
      <div class="tips">
        <img src="../../../static/warn.png" >
        <span>{{ tips }}</span>
      </div>
      <div class="btns">
        <div class="no" @click="cancel">取消</div>
        <div class="yes" @click="confirm">确认</div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                show:true,
                tips:'你确定要删除该项吗？',
                ensureFn:null,
                cancleFn:null
            }
        },
        methods: {
           confirm:function(){
                if(this.ensureFn && (typeof this.ensureFn == 'function')){
                  this.ensureFn();
                }
                this.show = false;
            },
            cancel:function(){
                if(this.cancleFn && (typeof this.ensureFn=='function')){
                  this.cancleFn();
                }
                this.show = false;
            }
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
  #bg{
    width: 100%;
    height:100vh;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
  }
  .confirmBox{
    z-index:10;
    width: 400px;
    height:170px;
    border:1px solid grey;
    background-color: white;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
    position: fixed;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%) ;
    -moz-transform:translateY(-50%) translateX(-50%) ;
    -ms-transform:translateY(-50%) translateX(-50%) ;
    -o-transform:translateY(-50%) translateX(-50%) ;
    transform:translateY(-50%) translateX(-50%) ;
    .warn{
      div{
        display: inline-block;
      }
      .title{
        width: 50px;
        line-height:40px;
        text-align: center;
        font-weight: 600;
      }
      .close{
        cursor: pointer;
        width: 50px;
        float: right;
        line-height:40px;
        text-align: center;
      }
      .close:hover{
        color: skyblue;
      }

    }
    .tips{
      @include prix(display,flex);
      @include prix(justify-content,center);
      @include prix(align-items,center);
      font-size: 14px;
      color: gray;
      height: 70px;
      img{
        display: inline-block;
        width: 32px;
        height:32px;
        margin:0 10px 0 -100px;
      }
    }
    .btns{
      @include prix(display,flex);
      @include prix(justify-content,flex-end);
      font-size: 14px;
      color: gray;
      padding-top:10px;
      div{
        border: 1px solid grey;
        @include prix(border-radius,5px);
        text-align: center;
        line-height: 30px;
        width: 60px;
        cursor: pointer;
        margin-right:30px;
      }
      .yes{
        background-color: deepskyblue;
        border: 1px solid skyblue;
        color: white;
      }
      .yes:hover{
        background-color: skyblue;
      }
      .no{
        margin-right: 10px;
      }
      .no:hover{
        border: 1px solid skyblue;
        color: skyblue;
      }
    }
  }


</style>
