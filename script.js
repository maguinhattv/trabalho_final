function logar(){
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == senha) {
    alert("Não podem ser iguais");
  } else {
    alert("Sucesso");
    location.href = "main.html";
  }
}
