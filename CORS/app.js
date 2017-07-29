let express = require('express');
let app = express();

app.get('/get', function(req, res){
    var news = [4,5,6,7,8,9,10,11,12];
    var data = [];
    for(var i=0; i<3; i++){
        var index = parseInt(Math.random()*news.length);
        data.push(news[index]);
        news.splice(index, 1);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
});

app.listen(3000,()=>{
    console.log('listening on 3000');
});