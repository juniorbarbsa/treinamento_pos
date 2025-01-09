const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "cole meu chapa"
    });
});

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log('Estou funfando bebe ' + PORT);
} )