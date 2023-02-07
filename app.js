const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/") {
        res.end("Welcome")
        return
    }
    if (req.url === "/gay") {
        res.end("Idk")
        return
    }
    res.end(req.url)
    return
})

server.listen(5000)