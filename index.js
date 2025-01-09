const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "cole meu chapa"
    });
});

app.get ('/products', (req, res) => {
    res.json([{nome: 'blusa'}, {nome:'calça'}, {nome:'vestido'}])

})

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log('Estou funfando bebe ' + PORT);
} )