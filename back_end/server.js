const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Nosso banco de dados temporário
let bankData = {
    // Agora temos objetos com email e senha para validar
    users: [
        { id: "1", email: "lenizio@email.com", password: "123", name: "Lenizio" },
    ],
    carts: {} 
};

// ROTA DE LOGIN: Para o Front-end consultar
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Busca um usuário que coincida com o email E a senha
    const user = bankData.users.find(u => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({ id: user.id, name: user.name });
    } else {
        res.status(401).json({ message: "Login ou senha incorretos" });
    }
});

// ROTA DE CADASTRO: Para salvar um novo usuário no banco
app.post('/register', (req, res) => {
    const { email, password, name } = req.body;

    // 1. Verificamos se o usuário já existe para não duplicar
    const userExists = bankData.users.find(u => u.email === email);

    if (userExists) {
        return res.status(400).json({ message: "Este e-mail já está cadastrado!" });
    }

    // 2. Criamos o novo objeto de usuário com um ID único (usando o tamanho do array + 1)
    const newUser = {
        id: (bankData.users.length + 1).toString(),
        email,
        password,
        name
    };

    // 3. Adicionamos ao nosso "banco"
    bankData.users.push(newUser);

    res.status(201).json({ message: "Usuário cadastrado com sucesso!", user: newUser });
});

// ROTA PARA SALVAR (POST) - É aqui que o erro 404 está acontecendo
app.post('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const produto = req.body;

    // Se o carrinho do usuário não existir, criamos um array vazio
    if (!bankData.carts[userId]) {
        bankData.carts[userId] = [];
    }

    // Adicionamos o produto na "gaveta" desse usuário
    bankData.carts[userId].push(produto);

    console.log(`Produto adicionado ao carrinho de ${userId}`);
    res.status(201).json({ message: "Produto adicionado!" });
});



// ROTA PARA LER (GET)
app.get('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    res.json(bankData.carts[userId] || []); // Retorna o carrinho ou vazio
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = bankData.users.find(u => u.id === id);
    
    if (user) {
        // Retornamos os dados, mas por segurança poderíamos omitir a senha em um sistema real
        res.json(user);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));