let http = require("http");
let https = require("https");
let app = http.createServer();

/**
 * 代理服务
 */

app.on("request",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Content-Type","application/json;charset=utf-8")
    let url = req.url;
    if(url.match(/^\/region\/.+$/ig)){
        let key = url.slice(url.lastIndexOf('/')+1);
        let s = https.request("https://wse.com.cn/zh/wsi-address/region/" + key ,(resp)=>{
            let arr = []
            resp.on("data",(a)=>{arr.push(a)})
            resp.on('end',function(){
                let str = Buffer.concat(arr).toString('utf-8');
                res.end(str)
            })
        })
        s.end()
    }else{
        res.end("没有找到")
    }
})




app.listen(3000,(err)=>{
    if(err) return
    console.log("listen to 3000")
})