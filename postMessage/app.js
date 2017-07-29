let express = require('express');
let app = express();

// app.use(express.static('./index.html'));
app.use('/b',require('./b.html'));

app.listen(3000,()=>{
    console.log('listening on 3000');
});