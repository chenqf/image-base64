/**
 * Created by chenqifeng on 2017/3/1.
 */

var imageBase64 = require('../index'),
    url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488373511979&di=67fc2633941638ad79783b882267c4de&imgtype=0&src=http%3A%2F%2Fimage76.360doc.com%2FDownloadImg%2F2014%2F07%2F2205%2F43616106_16.jpg';

imageBase64.url(url,function(data){
    console.log(data);
});