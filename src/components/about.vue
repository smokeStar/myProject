 <template>
  <div id="about">
    <div class="title">关于博主</div>
    <div class="left">
        <img src="../../static/head.jpg">
      </div>
    <div class="right">
        <div class="introduce">个人简介</div>
        <div class="details">这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。</div>
        <div class="work">
          <div class="experience">
            <div class="subtitle">工作经历</div>
            <div class="item1">1920年-2010年  地球和平卫队</div>
            <div class="item1">2010年-2017年   银河和平卫队</div>
          </div>
          <div class="prize">
            <div class="subtitle">获奖记录</div>
            <div class="item1">1920年 宇宙无敌打怪兽大奖一等奖</div>
            <div class="item1">1921年 宇宙无敌打怪兽大奖一等奖</div>
            <div class="item1">1922年 宇宙无敌打怪兽大奖一等奖</div>
          </div>
        </div>

      </div>
    <div class="copyright">© 2017 Sun's Blog 版权所有 网站备案号: 京993202300</div>
  </div>

</template>

<script>

</script>

<style lang="scss" scoped>
  #about{
    width: 100%;
    min-height: 200px;
    padding: 20px 0 40px 40px;
    box-sizing: border-box;
    text-align: left;
    background-color: white;
    border-bottom:1px solid #acc4ac;
    position: relative;
  }
  #about:after{
    content: '';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    color: #333333;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #acc4ac;
    font-family:"Open Sans", Helvetica, Arial, Verdana, sans-serif;
  }
  .left{
    width:25%;
    float: left;
    display: inline-block;
    margin-top: 25px;
    img{
      width: 100%;
      height: 125%;
    }
  }
  .right{
    float: right;
    width: 70%;
    margin-top: 25px;
    font-size: 14px;
    .details{
      width: 95%;
      padding: 40px 0;
      margin-bottom: 20px;
      border-bottom: 1px dashed #acc4ac;
    }
    .work{
      font-size: 12px;
      width: 95%;
      display: flex;
      justify-content: space-between;
      color: gray;
      .experience{
        width: 40%;
      }
      .prize{
        width: 40%;
      }
      .subtitle{
        padding-bottom: 20px;
        font-weight: 600;
        font-size: 13px;
        color: black;
      }
    }
  }
  .copyright{
    width:100%;
    height: 20px;
    line-height: 20px;
    clear: both;
    display: block;
    text-align: center;
    color: grey;
    font-size: 12px;
    position: absolute;
    bottom:-40px;
  }

</style>
