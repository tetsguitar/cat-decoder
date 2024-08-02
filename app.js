document.addEventListener("DOMContentLoaded", function() {
    // Esconder o textarea de output inicialmente
    document.getElementById("output-texto").classList.add("hidden");
    document.getElementById("botao-copiar").classList.add("hidden");
});

// Função para criptografar o texto
function criptografar() {
    let input = document.getElementById("input-texto").value;
    let encryptedText = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-texto").value = encryptedText;
    document.getElementById("output-texto").classList.remove("hidden");
    document.getElementById("botao-copiar").classList.remove("hidden");
    document.getElementById("box-output").classList.add("hidden");
}
 

// Função para descriptografar o texto
function descriptografar() {
    let input = document.getElementById("input-texto").value;
    let decryptedText = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-texto").value = decryptedText;
    document.getElementById("output-texto").classList.remove("hidden");
    document.getElementById("botao-copiar").classList.remove("hidden");
    document.getElementById("box-output").classList.add("hidden");
}

// Função para copiar o texto para a área de transferência
function copiartexto() {
    let outputText = document.getElementById("output-texto");
    outputText.select();
    document.execCommand("copy");

}