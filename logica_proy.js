
//donde selecciono el texto que ingresa el usu
const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje__encript");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptador() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.tolowerCase();

    for(let i = 0; i<matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado =stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptador() {
    const textoDesencriptado = encriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.tolowerCase();

    for(let i = 0; i<matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
