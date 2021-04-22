const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.sendFile(souborZeSlozky('index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function souborZeSlozky(soubor) {
    // absolutni cesta k souboru ve slozce
    return path.join(__dirname + '/' + soubor)
}