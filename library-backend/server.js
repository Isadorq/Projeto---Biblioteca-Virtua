const express = require('express');
const mangoose = require('mongoose');
const cors = require('cors');

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
MongoKerberosError.connect('mongodb+srv://isa:isadora@biblioteca.jve9d.mongodb.net/?retryWrites=true&w=majority&appName=Biblioteca', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Importação das rotas
const bookRoutes = require('./routes/books');
app.use('./api/books', booksRoutes);

// Definir a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})  