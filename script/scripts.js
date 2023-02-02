const textArea = document.querySelector("#texto1");
const mensaje = document.querySelector(".texto2")

function encriptar(stringencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringencriptado = stringencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringencriptado.includes(matrizCodigo[i][0])) {
            stringencriptado = stringencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringencriptado
}

function desencriptar(stringdesencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringdesencriptado = stringdesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringdesencriptado.includes(matrizCodigo[i][1])) {
            stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringdesencriptado
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    document.querySelector(".imagenderecha").style.display = "none"
    document.querySelector(".texto").style.display = "none"
    document.querySelector(".copiar").style.display = "show"
    document.querySelector(".copiar").style.display = "inherit"
}

function btndesEncriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    document.querySelector(".imagenderecha").style.display = "none"
    document.querySelector(".texto").style.display = "none"
    document.querySelector(".copiar").style.display = "show"
    document.querySelector(".copiar").style.display = "inherit"
}

function copy(){
    var contenido = document.querySelector(".texto2");
    contenido.select();
    document.execCommand("copy");
}