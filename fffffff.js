const botaoMostraPalavras = document.querySelector("#cr7");

botaoMostraPalavras.addEventListener("click", ver);

function mostraPalavrasChave() {
  const texto = document.querySelector("#paragrafo").value;

  const campoResultado = document.querySelector("#resposta");

  const palavrasChave = processaTexto(messi);

  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(messi) {
  let palavras = texto.split(/\P{L}+/u);

  return palavras;
}