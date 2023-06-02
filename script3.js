const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const bodyParser = require("body-parser");

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "maga",
  password: "porto2006",
  database: "desafio_rodrigo",
});

// Conexão com o banco de dados
connection.connect((error) => {
  if (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } else {
    console.log("Conexão com o banco de dados estabelecida.");
  }
});

// Rota para receber os dados do formulário
app.post("/register", (req, res) => {
  const { firstname, lastname, user, password } = req.body;

  // Insere o registro no banco de dados
  const sql = `INSERT INTO registro (firstname, lastname, user, password) VALUES (?, ?, ?, ?)`;
  connection.query(
    sql,
    [firstname, lastname, user, password],
    (error, result) => {
      if (error) {
        console.error("Erro ao inserir o registro no banco de dados:", error);
        res.status(500).send("Erro ao processar o registro.");
      } else {
        console.log("Registro inserido com sucesso!");
        res.status(200).send("Registro inserido com sucesso.");
      }
    }
  );
});

// Inicia o servidor
app.listen(3300, () => {
  console.log("Servidor em execução na porta 3300");
});
