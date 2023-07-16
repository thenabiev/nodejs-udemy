var http=require('http');
const routes=require('./routes')


var server=http.createServer(routes);

const PORT=3002;

server.listen(PORT, ()=>{

    console.log(`Server listening port ${PORT}`)
})
