let express = require('express');
let app = express();

app.get('/get', function(req, res) {
    let news = [4,5,6,7,8,9,10,11,12];
    let data = [];
    for (let i = 0; i < 3; i++) {
        let index = parseInt(Math.random() * news.length);
        data.push(news[index]);
        news.splice(index, 1);
    }
    let cb = req.query.callback;    //获取callback参数的值
    if (cb) {
        res.send(cb + '(' + JSON.stringify(data) + ')');
        //如果callback参数的值存在，就用它做函数名包裹数据，再发送
    } else {
        res.send(data);
        //如果没有callback参数，数据就直接发送
    }
});

app.listen(3000,()=>{
    console.log('listening on 3000');
});
