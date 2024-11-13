const http=require('http');
const server =http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('welcome to our homepage')
}
if(req.url==='/about'){
    res.end('here is our short history')
}
res.end(`
    <h1> oops</h1>
    <a href="/">back home</a>
    `)
})

server.listen(5000)