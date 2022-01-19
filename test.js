const http = require('http');
const fs   = require('fs');
const _     = require('lodash');

const server = http.createServer((req, res)=>{
    //loadash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() =>{
        console.log('hello');
    });
    greet();
    greet();
    
})