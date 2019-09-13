const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/lib', express.static('node_modules'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.all('/echo/:code', function(req, res){
    const code =  req.params.code;
    res.status(Number.parseInt(code));
    res.send();
});

app.listen(3000, function () {
    console.log('Server listen at port 3000!');
});
