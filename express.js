const express = require('express');
const app = express();
const morgan = require('morgan');
//connect to mongoDb
const dbURI = 'mongodb+srv://<arpit333>:<arpit123>@test1.pkqed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(app.router);


app.get('/',(req,res) =>  {
   const hello = console.log("hello arpit")
    res.send(hello)
    
  

})

app.use((req, res, next)=>{
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
});
app.use((req, res, next)=>{
    console.log('in the next middleware');
    next();
});




app.get('/about',(req, res)=>{
    res.sendFile('.view/index.ejs',{root: __dirname});
});



const port = process.env.PORT || 3000
console.log('EllllllNV PORT', process.env.PORT)


app.listen(port,() => console.log(`listning on port  ${port} `))

app.use(express.static('public'));
app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

