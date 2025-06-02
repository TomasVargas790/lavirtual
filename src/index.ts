import Express from "express";

const PORT = process.env.PORT || 3000
const server = Express();

server.all('/', (req, res) => {
    res.send('el diablo')
})

server.listen(PORT, () => {
    '[si vieja]'
})