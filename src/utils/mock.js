import Mock from 'mockjs'
Mock.setup({
  timeout: 700
});
const Random = Mock.Random;
let pool = {symbol: "我是天才"};
Random.character( pool.symbol );
export default Mock.mock('http://g.cn','post', {'res|10':[
  {
    'name'     : ()=>Random.name(),
    'sex'      : 'girl',
    'age|1-100':  100,
    'color'    : '@color',
    'imgUrl'   : ()=>Random.dataImage('150x80'),
    'title'    : 'css学习之路',
    'text'     : ()=>Random.string(200),
    'detail'   : ()=>Random.string(400),
    'date'     : ()=>Random.date(),
  }
]});
