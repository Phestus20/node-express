const http = require('http')

const server = http.createServer((req,res)=>{
   // console.log(req)// we go refresh the server and come to the terminal
    if(req.url==='/'){
        res.write("Welcom to our Home page")
        res.end();
    }

    if(req.url==='/about'){
        res.end("Welcom to our About History page");
    }

    
        res.end(
            `<h1> Oops! </h1>
            <p> We can't find the page you are loking for </p>
            <a hre='/'>back home</a>`
        
        );
        // we go refresh the server and come to the terminal

})

server.listen(5000);

const _ = require('lodash')

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems)