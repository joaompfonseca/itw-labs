function getOp() {
    var op = document.getElementById("op");
    o = op.options[op.selectedIndex].id;
    if (o == "fac") {
        val2.disabled = "disabled";
        val2.value = "";
    }
    else {
        val2.disabled = "";
    }
    return o
}

function calcula() {
    var val1 = document.getElementById("val1");
    var val2 = document.getElementById("val2");
    var res = document.getElementById("res");

    var a = parseFloat(val1.value);
    var b = parseFloat(val2.value);
    var o = getOp()

    if (b == 0 && (o == "div" || o == "rdiv")) {
        return alert("Não é possível dividir por 0!")
    }
    else if (a < 0 && o == "fac") {
        return alert("Não existe factorial de um número negativo!")
    }

    switch (o) {
        case "sum":
            res.value = a + b;
            break;
        case "sub":
            res.value = a - b;
            break;
        case "mul":
            res.value = a * b;
            break;
        case "div":
            res.value = a / b;
            break;
        case "rdiv":
            res.value = a % b;
            break;
        default:
            var t = 1
            for (i = 1; i <= a; i++) {
                t *= i
            }
            res.value = t;
            break;
    }
}