import Mock from 'mockjs'
// 定义请求时间
Mock.setup({
  timeout: 700
});
const Random = Mock.Random;
var pool = {symbol: "我是天才"};
Random.character( pool.symbol );
export default Mock.mock('http://g.cn','get', {'res|20':[
  {
    'name'     : ()=>Random.name(),
    'sex'      : 'girl',
    'age|1-100':  100,
    'color'    : '@color',
    'imgUrl'   : ()=>Random.dataImage('160x80'),
    'title'    : 'BScroll实例',
    'text'     : ()=>Random.string(200),
    'detail'   : ()=>Random.string(400),
    'date'     : ()=>Random.date(),
  }
]});

