const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello adii');
   res.end(`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Pseudo selectors and more Designing</title>
       <style>
           .container{
               border:2px solid darkmagenta;
               background-color: aquamarine;
               width:666px;
               padding:12px;
               margin:30px auto;
           }
           .btn{
   
               /* both side cursor use cursor:Pointer 
               text-decoration for underline remove
               hover means click on button
               visted:you visted this 
             
               */
               background-color:antiquewhite;
               padding:4px;
               border:none;
               cursor: pointer;
               font-size: 12px;
               border-radius: 4px;
               font-family:Arial, Helvetica, sans-serif;
               font-weight: bold;
           }
          
           a{
               
               text-decoration: none;
           }
           a:hover{
               color:rgb(238, 105, 11);
               background-color:black;
               border:2px solid salmon;
           }
           a:visited{
               background-color: yellow;
           }
           a:active{
               background-color: blueviolet;
           }
       </style>
   </head>
   <body>
       <div class="container" id="cont1">
           <h3>This is my heading</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae cum voluptas magnam vero ab iste animi tenetur unde eaque repellendus suscipit incidunt praesentium et iusto quasi, sapiente nobis ipsum quia voluptatem! Tempora, minus!</p>
           <a href="https//yahoo.com" class="btn">Read more</a>
           <button class="btn">contact us</button>
       </div>
   
   </body>
   </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});