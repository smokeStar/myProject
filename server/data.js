//---------- 文章列表数据 v17.11.23 ----------------------------

let articleData = [
  {
         id     : 1001
      ,  title  : 'Vue自定义插件'
      ,  date   : '2017-11-15 16:45'
      ,  tag    : 1
      ,  des    : `在vue项目中，可以自定义组件像vue-resource一样使用Vue.use（）方法来使用，具体实现方法：1、首先建一个自定义组件的文件夹，比如叫loading，里面有一个index.js，还有一个自定义组件loading.vue,在这个loading.vue里面就是这个组件的具体的内容`
      ,  prise  : 0
      ,  comment: 0
      ,  type   : 'Vue'
  },
  {
         id     : 1002
      ,  title  : '将B-scroll封装成自己的Vue组件'
      ,  date   : '2017-11-15 16:45'
      ,  tag    : 1
      ,  des    : '在Vue项目开发的过程中，某些项目需求的实现，我们需要引入第三方的插件，而使用这些第三方插件的时候我们需要使用大量的命令式代码，这显然不是Vue所提倡的，因此，我们有强烈的需求将第三方插件抽象为自己的组件！就拿B-scroll举例，我们可以把它封装成类似于小程序的scroll-view组件，方便开发者的调用！'
      ,  prise  : 0
      ,  comment: 0
      ,  type   : 'Vue'
  },
  {
         id     : 1003
      ,  title  : 'Promise解决js回调嵌套'
      ,  date   : '2017-11-15 16:45'
      ,  tag    : 1
      ,  des    : 'Promise对象用于对一个异步操作的最终完成（或者失败）及其结果值的表示。我们经常会做些承诺，如果我赢了你就嫁给我，如果输了我就嫁给你之类的诺言。这就是promise的中文含义：诺言，一个成功，一个失败。'
      ,  prise  : 0
      ,  comment: 0
      ,  type   : 'Vue'
  },
  {
         id     : 2001
      ,  title  : 'Css对于文字溢出隐藏的处理'
      ,  date   : '2017-11-17  12:15'
      ,  tag    : 1
      ,  des    : '在项目开发的过程，往往会遇到文字长度过长但又不想它自动换行的需求，这个时候需要将溢出文字隐藏，溢出的部分用省略号替代，这种需求可以有很多种方案解决，最简单的是c3属性处理，当然如果需求不同可以用js来处理！'
      ,  prise  : 0
      ,  comment: 0
      ,  type   : 'Css'
  },
  {
         id     : 2002
      ,  title  : 'Css上下左右居中的居中方法'
      ,  date   : '2017-11-17  12:45'
      ,  tag    : 0
      ,  des    : '这次打算写一写前端几种常见的上下左右垂直居中的方法，分析每一种方法的优势及虐势，以及最佳的选取方案，第一，绝对定位元素的居中显示，当一个定位元素已经绝对居中了以后，可以采取这种方式。'
      ,  prise  : 0
      ,  comment: 0
      ,  type   : 'Css'
  },
  {
         id     : 3001
      ,  title  : 'js常用的方法'
      ,  date   : '2017-11-24  16:21'
      ,  tag    : 0
      ,  des    : '常用的数组,字符串的操作方法,记录在博客,方便自己查阅.'
      ,  prise  : 0
      ,  comment: 0
      ,  type   : 'Js'
  }

];
module.exports = articleData;
