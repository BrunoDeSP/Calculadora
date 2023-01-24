let circulo = document.querySelector('input#onOff')

function empty() {
    if (circulo.checked == 0) {
        var res = document.querySelector('p#resultado').innerHTML = "";
    }
}

function insert(num) {
    if (circulo.checked == 0) {
        window.alert('É preciso ligar primeiro a calculadora!!!')
    } else {
        var res = document.querySelector('p#resultado').innerHTML;
        document.querySelector('p#resultado').innerHTML = res + num
    }
}

function clean() {
    var res = document.querySelector('p#resultado').innerHTML
    if (circulo.checked == 0) {
        window.alert('É preciso ligar primeiro a calculadora!!!')
    } else if (res.length == 0) {
        window.alert('A calculadora já esta limpa!')
    } else {
        document.querySelector('p#resultado').innerHTML = ""
    }
}

function remove() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (circulo.checked == 0) {
        window.alert('É preciso ligar primeiro a calculadora!!!')
    } else if (resultado.length == 0) {
        window.alert('A calculadora já esta limpa!')
    } else {
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
    }
}

function calculate() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (circulo.checked == 0) {
        window.alert('É preciso ligar primeiro a calculadora!!!')
    } else if (resultado.length == 0) {
        window.alert('Não a nada a calcular')
    } else {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}


