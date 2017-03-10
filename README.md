# image-base64
Convert image to Base64 format

## Installation:

```sh
npm install image-base64 --save
```
## Usage:
```javascript
var imageBase64 = require('image-base64');
//Local image
imageBase64.local('./image/xxx.jpg');
//Remote image
imageBase64.url('http://xxxx.xxx.xx/image/xxx.jpg',function(base64){
    console.log(base64)
})
```

## API:
__local(path)__
* `path` string, local picture address

__url(path,fn)__
* `path` string, remote picture address
* `fn` callback function after getting data




