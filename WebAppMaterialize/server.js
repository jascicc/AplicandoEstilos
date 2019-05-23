const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.listen(3000,()=>{
    console.log('Server ready and listening on port 3000');
});

app.get('/',(req,res)=>{
    res.render('index.html');
});