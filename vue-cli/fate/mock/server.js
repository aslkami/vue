let http = require('http')
let fs = require('fs')
let url = require('url')
let readFile = require('./readFile')



let swiper = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552040160986&di=059f605350b9c7bf58df39aaf238a5fc&imgtype=0&src=http%3A%2F%2Fimg.jammyfm.com%2Fwordpress%2Fwp-content%2Fuploads%2F2017%2F12%2F201712181118371807.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552040086585&di=580564fe1d5c1d6ffd00218a83249298&imgtype=0&src=http%3A%2F%2Fp3.music.126.net%2Fnpx6L93bU6iQvx7SpXNAyw%3D%3D%2F109951163812928447.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552040075205&di=61f746614a7af9c5387a2144dcbadf2f&imgtype=0&src=http%3A%2F%2Fimg1.dongqiudi.com%2Ffastdfs3%2FM00%2F71%2F68%2FChOxM1vCCwOAcSxTAAHDN90Xn5w863.jpg'
]





http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8");

  if (req.method === 'OPTIONS') return res.end()

  let { pathname, query } = url.parse(req.url)
  // let { pathname, query } = url.parse(req.url, true)  true是将参数变成对象
  if( pathname === '/swiper' ) {
    res.end(JSON.stringify(swiper))
  }

  if( pathname === '/star') {
    readFile('./mock/star.json', function(data){
      let star = data.slice(0, 6)
      return res.end(JSON.stringify(star))
    })
  }
}).listen(4796)