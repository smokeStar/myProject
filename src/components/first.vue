<template>
  <div class="top">
    <div class="logo" @click="newBlank">
      <img src="../../static/logo.png" alt="">
      <div class="word">
        <div>Sun's</div>
        <div>Blog</div>
      </div>
    </div>
    <div class="menu">
      <div class="list">
        <router-link to="/blog" tag="div">博客</router-link>
        <router-link to="/about" tag="div">关于我</router-link>
        <router-link to="/contact" tag="div">和我联系</router-link>
      </div>
    </div>
    <div class="search">
        <input type="text" v-model="keyWord" @keyup.enter="search(1)">
        <div @click="search(1)">搜索</div>
    </div>
    <div class="logout" @click="logout"> 注销</div>

  </div>


</template>

<script>

  export default{
  	  data () {
  	  	return{
          keyWord:'',
          results:[]
  	  }},
      mounted(){
  	  	if(this.$router.currentRoute.fullPath == '/blog/search'){  // 解决在search路由的时候，重新刷新页面
          this.search();
        }
      },
      methods:{
  	  	search : function(num){
  	  		let that = this;
  	  		this.keyWord = this.keyWord || localStorage.getItem('keyword');
  	  		// 删除关键字不输入内容的时候点击搜索是 无法搜索的，并移除keyword缓存。
  	  		if(this.keyWord.trim() == ''|| (num == 1 && this.keyWord == localStorage.getItem('keyword'))) {
  	  			this.keyWord = '';
  	  			localStorage.removeItem('keyword');
  	  			return;
          }
          that.$store.state.results = [];
          let params = { type : 'All'};
          this.$http.get('http://localhost:8088/api/article/description?op=get',{params}).then(function(res){
                if(!res || !res.data || !res.data.ok) return;
                let data = res.data.data;
                data.forEach(function(d){
                	if(d.des.indexOf(that.keyWord)!=-1 || d.title.indexOf(that.keyWord)!=-1){
                		d.url = '/blog/'+ d.type.toLocaleLowerCase();
                    that.$store.state.results.push(d);
                  }
                });
              that.$router.push('/blog/search');
          });
          localStorage.setItem('keyword',that.keyWord);
  	  		console.log(this.keyWord);
        },
        newBlank: function (){
            window.open(location.href);
        },
        logout(){
        	let that = this;
        	$confirm('你确定要注销此账号么?',function(){
            sessionStorage.removeItem('login');
            that.$router.replace('/login');
          });
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
  %name{
    width: 30%;
    height: 100%;
  }
  .top{
    position: relative;
    height: 125px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    @include prix(display,flex);
    @include prix(justify-content,space-around);
    @include prix(align-items,center);
    .logo{
      cursor: pointer;
      width:20%;
      @extend %name;
      @include prix(display,flex);
      @include prix(align-items,center);
      img{
        height: 80%;
      }
      .word{
        display: inline-block;
        height: 68px;
        font-weight: 700;
        font-size: 30px;
        font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;
        text-align: left;
        margin-left:10px;
      }
    }
    .menu{
      @extend %name;
      width: 35%;
      padding-top: 43px;
      box-sizing: border-box;
      .list{
        height: 40px;
        border-bottom: 1px solid black;
        border-top:1px solid black;
        div{
          font-size: 14px;
          width: 30%;
          height: 100%;
          display: inline-block;
          line-height: 40px;
          cursor: pointer;
        }
        div:hover{
          color: green;
        }
      }
    }
    .search{
      @extend %name;
      @include prix(display,flex);
      @include prix(justify-content,center);
      @include prix(align-items,center);
      width: 22%;
      input{
          height: 25px;
        }
        div{
          display: inline-block;
          height: 31px;
          line-height: 31px;
          width: 31px;
          background-color: black;
          color: white;
          font-size: 12px;
          text-align: center;
          border-radius: 3px;
          cursor: pointer;
      }
    }
    .logout{
      width: 50px;
      height:25px;
      line-height: 25px;
      font-size: 12px;
      border: 1px solid gainsboro;
      -webkit-border-radius:5px;
      -moz-border-radius:5px;
      border-radius:5px;
      cursor: pointer;
    }
    .logout:hover{
      border:1px solid skyblue;
    }
  }

</style>
