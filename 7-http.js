const http = require ("http")

const Server = http.createServer((req, res) => {
   if(req.url === "/"){
    res.end("Welcome To Our Home Page!")
   }
   if(req.url === "/About"){
      res.end("Herein Is Our History!")
   }
   res.end(`
      <h1>Opps!</h1>
      <p>You seem to be lost Mate!</p>
      <a href = "/" > Back to the Home Page</a>
     `)
})

Server.listen(5000)