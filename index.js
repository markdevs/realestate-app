const express = require('express');
const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
    res.send({message: 'Hello World'});
})
app.listen(PORT, ()=> {
    console.log(`App rodando na porta ${PORT}`);
})