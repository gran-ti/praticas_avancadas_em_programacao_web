const API_URL_CEP = "https://viacep.com.br/ws/";
const API_URL_CEP_FORMAT = "/json/";


function validarCEP() {
    var cep = document.getElementById("cep").value;
    var regex = /^[0-9]{8}$/;

    if (regex.test(cep)) {
        var url = API_URL_CEP + cep + API_URL_CEP_FORMAT;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                document.getElementById("logradouro").innerHTML = response.logradouro;
                document.getElementById("bairro").innerHTML = response.bairro;
                document.getElementById("cidade").innerHTML = response.localidade;
                document.getElementById("estado").innerHTML = response.uf;
                document.getElementById("endereco").style.display = "block";
            }
        };
        xhr.send();
    } else {
        alert("CEP inválido!");
    }
}

function limparDados() {
    document.getElementById("cep").value = "";
    document.getElementById("logradouro").innerHTML = "";
    document.getElementById("bairro").innerHTML = "";
    document.getElementById("cidade").innerHTML = "";
    document.getElementById("estado").innerHTML = "";
    document.getElementById("endereco").style.display = "none";
}

function showItem(element) {
    element.style.display = 'block'
  }