/**
 * Created by chenqifeng on 2017/3/1.
 */
var imageBase64 = require('../index');
var fs = require('fs');
// var url = 'http://s0.hao123img.com/res/img/logo/logonew.png';
var url = 'http://img1.tg-img.com/seller/201701/11/38E8B7F8-A0BC-4B4F-9704-EE7469AE2404.jpg!s';


imageBase64.url(url,function(data){
    fs.writeFileSync('message.txt', data);
});
