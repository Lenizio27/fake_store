const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Nosso banco de dados temporário
let bankData = {
    users: [],
    carts: {} 
};

// ROTA PARA SALVAR (POST)
app.post('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    bankData.carts[userId] = req.body; // Salva o que vier no corpo da requisição
    res.status(200).send({ message: "Carrinho salvo!", userId });
});

// ROTA PARA LER (GET)
app.get('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    res.json(bankData.carts[userId] || []); // Retorna o carrinho ou vazio
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));