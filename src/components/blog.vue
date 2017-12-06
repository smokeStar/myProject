<template>
  <div id="blog">
    <div class="left">
      <div class="mian-title">博客分类</div>
      <ul>
        <router-link to="/blog/vue" tag="li" active-class="activeClass">Vue</router-link>
        <router-link to="/blog/css" tag="li" active-class="activeClass">Css</router-link>
        <router-link to="/blog/javascript" tag="li" active-class="activeClass">Javascript</router-link>
        <router-link to="/blog/node" tag="li" active-class="activeClass">node&mongodb</router-link>
      </ul>
      <div class="mian-title">关于博主</div>
      <router-link to="/about" tag="img" src="../../static/head.jpg" alt="头像" class="img"></router-link>
      <div class="word">姓名： Sun</div>
      <div class="word">生日： 1995-03-01</div>
      <div class="word">星座： 白羊座</div>
      <div class="word">城市： 深圳</div>
      <div class="word">职业： Coder</div>
      <div class="word">爱好： NBA、电影、动漫</div>
      <div class="copyright">© 2017 Sun's Blog 版权所有</div>
    </div>
    <div class="right">
      <transition name="transition">
        <router-view class="view"></router-view>
      </transition>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .activeClass{
    color: #acc4ac;
  }
  #blog{
    width: 100%;
    min-height:21px;
    padding: 0 25px;
    text-align: left;
    font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;
    display: inline-block;
    background-color: white;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .view{
      transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .transition-enter-active{
      opacity: 0;
      -webkit-transform: translate(30px, 0);
      transform: translate(30px, 0);
    }
    .transition-leave-active{
      opacity: 0;
      -webkit-transform: translate(-30px, 0);
      transform: translate(-30px, 0);
    }
  }
  .left{
    width:25%;
    min-height: 1px;
    padding-top:20px;
    font-size: 13px;
    display: inline-block;
    margin-right: 20px;
    ul,li{
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .mian-title{
      font-weight: 600;
      border-bottom: 2px solid #ACC4AC;
      padding-bottom: 7px;
    }
    ul{
      padding: 20px 0;
      li{
        height: 20px;
        margin-top: 10px;
        cursor: pointer;
      }
      li:hover{
        color:#acc4ac;
      }
      li:first-child{
        margin: 0;
      }
    }
    .img{
      width: 100%;
      margin: 20px 0;
      cursor: pointer;
    }
    .word{
      font-size:12px;
      color: #666;
      margin-bottom: 2px;
    }
    .copyright{
      margin-top: 20px;
      color: gray;
      font-size: 12px;    }
  }
  .right{
    width: 60%;
    min-height: 751px;
    float: right;
    padding: 20px 0 0 0;
    margin-right: 45px;
  }

</style>
