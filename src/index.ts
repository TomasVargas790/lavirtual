import express from "express";

console.clear()

const PORT = process.env.PORT || 3000
const server = express();


server.all('/', (req, res) => {
    const logEntry = {
    method: req.method,
    url: req.url,
    time: new Date().toISOString(),
    ip: req.socket.remoteAddress
  };

    console.table(logEntry)
    res.send('el diablo')

})

server.listen(PORT,()=>{
    console.log('[si vieja]');
    
})