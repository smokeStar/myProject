<template>
  <div id="item">
    <div  class="item" v-for="i in item">
      <router-link :to="{ path:i.url +'/' +i.title,query:{ id:i.id }}" tag="div" v-if="type == 'search'"> <!--搜索结果的跳转-->
        <div class="icon"></div><div class="title">{{ i.title }}</div>
      </router-link>
      <router-link :to="{ path:$route.path+'/'+i.title,query:{ id:i.id }}" tag="div" v-else>     <!--普通列表的跳转-->
        <div class="icon"></div><div class="title">{{ i.title }}</div>
      </router-link>
      <!--<router-link :to="$route.path+'/'+i.title" tag="img" :src="i.imgUrl" ></router-link>-->
      <div class="describe">{{ i.des }}</div>
      <div class="bottomMsg">
        <div class="date" title="时间">{{ i.date }}</div>
        <div class="prise" title="点赞"><div class="icon-small"></div> <span>({{ i.prise }})</span></div>
        <div class="comment" title="评论"><div class="icon-small"></div><span>({{ i.comment }})</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['item','type']
    }
</script>

<style lang="scss" scoped>
  @mixin prix($proprety,$value){
    -webkit-#{$proprety}:$value;
    -moz-#{$proprety}:$value;
    -ms-#{$proprety}:$value;
    #{$proprety}:$value;
  }
  .item{
    margin-bottom:30px;
    padding-bottom: 30px;
    box-sizing: border-box;
    border-bottom: 1px dashed gainsboro;
    cursor: pointer;
    .title{
      font-size: 18px;
      font-family: 'microsoft yahei';
      line-height: 18px;
      display: inline-block;
      vertical-align: middle;
      margin-left:10px;
      margin-bottom: 15px;
    }
    .icon{
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("../../static/original.png")  ;
      background-size: cover;
      vertical-align: middle;
      margin-bottom: 15px;

    }

    .time{
      color: #a0a0a0;
      font-size: 14px;
      line-height: 14px;
      margin: 0 0 10px 0;
    }
    .describe{
      color: #666;
      font-size: 14px;
      width: 100%;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:3;
      -webkit-box-orient:vertical;
      text-indent: 28px;
      line-height: 180%;
    }
    .bottomMsg{
      @include prix(display,flex);
      justify-content: flex-end;
      font-size: 13px;
      color: #666;
      margin-top: 15px;
      .prise,.date,.comment{
        cursor: pointer;
        margin-right:20px ;
        span{
          vertical-align: middle;
        }
      }
      .prise{
        .icon-small{
          background: url("../../static/prise.svg") no-repeat;
          background-size: cover;
          -webkit-background-size:cover;

        }
      }
      .comment{
        .icon-small{
         background:url("../../static/comment.svg") no-repeat ;
         -webkit-background-size:cover;
         background-size:cover;
          margin-right: 2px;
        }
      }
      .icon-small{
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
      }
    }


  }

</style>
