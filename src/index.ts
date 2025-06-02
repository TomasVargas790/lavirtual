import express from "express";
import path from 'path';

console.clear()

const PORT = process.env.PORT || 3000
const server = express();



server.all('/', (req, res, next) => {
    const logEntry = {
    method: req.method,
    url: req.url,
    time: new Date().toISOString(),
    ip: req.socket.remoteAddress
  };

    console.table(logEntry)

    next();
})


server.use(express.static(path.resolve('public')));
/* server.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
}); */

server.listen(PORT,()=>{
    console.log('[si vieja]');
    
})