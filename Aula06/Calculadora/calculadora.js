var controlo = 1;
var operacao = "";
var op1 = "";
var op2 = "";
var res = document.getElementById("res");

function addNumber() {
    var n = event.target.value;
    if (n == "0" && operacao == "/") {
        alert("Erro! Não é possível dividir por zero!");
        clearResult();
        return;
    }
    if (controlo == 1) {
        op1 += n;
    } else {
        op2 += n;
    }
    if (res.innerText == "0" || op1 == "" || (op2 == n && controlo == 2)) {
        res.innerText = n;
    } else {
        res.innerText += n;
    }
}

function addOperation() {
    var x = event.target.value;
    if (op1 == "" || (operacao != "" && op2 == "")) {
        alert("É necessário introduzir um número!");
        clearResult();
        return;
    }
    if (controlo == 1) {
        operacao = x;
        controlo = 2;
    } else {
        switch (operacao) {
            case "+":
                op1 = parseFloat(op1) + parseFloat(op2);
                break;
            case "-":
                op1 = parseFloat(op1) - parseFloat(op2);
                break;
            case "*":
                op1 = parseFloat(op1) * parseFloat(op2);
                break;
            case "/":
                op1 = parseFloat(op1) / parseFloat(op2);
                break;
        }
        op1.toString();
        res.innerText = op1;
        op2 = "";
        operacao = x;
    }
}

function calculate() {
    addOperation()
}

function clearResult() {
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "0";
}   