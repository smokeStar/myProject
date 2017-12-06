<template>
  <div id="login">
      <div class="bg"></div>
      <div class="box">
        <div class="title">Log In to Sun</div>
        <div class="tips">Don't have an account? <span @click="$router.push('/register')">Sign Up Free!</span></div>
        <div class="ipt special">
          <input type="text" placeholder="Email" v-model=" account">
        </div>
        <div class="ipt">
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <div class="tip">
          <div class="top">There is no way to do it without </div>
          <div class="bottom">your email and password</div>
        </div>
        <div class="submit" @click="login">LOG IN</div>
        <div class="question">Forget password?</div>

      </div>
  </div>

</template>

<script>
    export default {
    	data(){
    		return{
    			account :'',
          password:''
        }
      },
      methods:{
    		login(){
    			let params = {
    				account  : this.account,
            password : this.password
          };
          this.$http.get('http://localhost:8088/api/login/getAccount?op=get',{params:params})
            .then( res=>{
              if(res.data.ok){
                $toast('登录成功');
                this.$store.state.isLogin = true;
                sessionStorage.setItem('login',this.$store.state.isLogin);
                this.$router.replace('/blog');
                }else{
                  return $toast('登录失败!');
                }
          })
        }
      },
      beforeRouteEnter(to, from, next){
    		next(vm=>{ vm.$store.state.isLogin = false;});  // 在beforeRouteEnter中通过vm获得this即组件的实例
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
  #login{
    width:100%;
    height: 100vh;
    position: relative;
    @include prix(display,flex);
    @include prix(justify-content,center);
    @include prix(align-items,center);
    .bg{
      position: absolute;
      height: 100%;
      width: 100%;
      background: url("../../static/bg.png") 100% 100% no-repeat;
    }
    .box{
      width:45%;
      height: 85%;
      z-index: 1;
      @include prix(border-radius,10px);
      background-color: white;
    }
    .title{
      height: 100px;
      line-height: 143px;
      font-size: 40px;
      font-weight: lighter;
      font-weight: 100;
    }
    .tips{
      font-size:14px;
      color: grey;
      span{
        color: skyblue;
        cursor: pointer;
      }
    }
    .special{
      background-color: rgba(223,223,223,.3);
    }
    .ipt{
      width: 75%;
      margin:auto;
      border:1px solid palevioletred ;
      -webkit-border-radius:10px;
      -moz-border-radius:10px;
      border-radius:7px;
      line-height:35px;
      margin-top:30px;

      input{
        width: 90%;
        outline:none;
        border:none;
        height:35px;
        font-size: 16px;
        background-color: transparent;

      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #000; opacity:1;
      }

      ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #000;opacity:1;
      }

      input:-ms-input-placeholder{
        color: #000;opacity:1;
      }

      input::-webkit-input-placeholder{
        color: gainsboro;opacity:1;
        font-size: 16px;
        font-style: italic;
      }
    }
    .ipt:focus-within{
      border:1px solid deepskyblue;
    }
    .tip{
      width: 75%;
      margin: 30px auto;
      line-height:35px;
      background-color: #FFB19A;
      border-radius: 8px;
      font-size:15px;
      font-weight:lighter;
    }
    .submit{
      color: white;
      width: 75%;
      margin: 30px auto 0;
      font-size: 15px;
      font-weight:lighter;
      background-color: #5CB5DF;
      line-height: 50px;
      -webkit-border-radius:8px;
      -moz-border-radius:8px;
      border-radius:8px;
      cursor: pointer;

    }
    .question{
      color: skyblue;
      line-height: 50px;
      width: 75%;
      margin:10px auto;
      cursor: pointer;
    }
  }

</style>
