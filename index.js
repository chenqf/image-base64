/**
 * Created by chenqifeng on 2017/3/1.
 */

var fs = require("fs"),
    mineType = require('mime-types'),
    http = require('http'),
    url  = require('url');


exports.local = function(path){
    return 'data:' + mineType.lookup(path) + ';base64,' + fs.readFileSync(path).toString("base64");
};

exports.url = function(uri,callback){
    new imageServer( http , url).http( uri  , function( data ){
        callback('data:' + data.type + ';base64,' + data.base64);
    });
};



var imageServer = function( http , url ){
    var _url  = url;
    var _http = http;

    this.http = function(url , callback , method){

        method      = method || 'GET';
        callback    = callback || function(){};
        var urlData = _url.parse(url);
        var request = _http.createClient(80 , urlData.host).
        request(method, urlData.pathname, {"host": urlData.host});

        request.end();

        request.on('response', function (response){

            var type = response.headers["content-type"],
                body = "";

            response.setEncoding('binary');

            response.on('end', function () {
                var base64 = new Buffer(body, 'binary').toString('base64');
                var data = {
                    type   : type ,
                    base64 : base64
                };
                callback(data);
            });
            response.on('data', function (chunk) {
                if (response.statusCode == 200) body += chunk;
            });
        });

    };
};

