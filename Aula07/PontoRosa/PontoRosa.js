//--- TODO


var qty1 = parseInt(document.getElementById("qty1").value);
var qty2 = parseInt(document.getElementById("qty2").value);
var qty3 = parseInt(document.getElementById("qty3").value);
var qty4 = parseInt(document.getElementById("qty4").value);
var qty5 = parseInt(document.getElementById("qty5").value);
var qty6 = parseInt(document.getElementById("qty6").value);
var totalq = document.getElementById("quantidades");
var totalmoney = document.getElementById("total");


function addProduct(number) {
    switch(number) {
        case (1):
            qty1 += 1;
            break;
        case (2):
            qty2 += 1;
            break;
        case (3):
            qty3 += 1;
            break;
        case (4):
            qty4 += 1;
            break;
        case (5):
            qty5 += 1;
            break;
        case (6):
            qty6 += 1;
            break;
    }
    calculate()
}

function calculate() {
    var quant = parseInt(qty1 + qty2 + qty3 + qty4 + qty5 + qty6)
    var total = parseFloat(qty1 * 24.99 + qty2 * 21.99 + qty3 * 19.99 + qty4 * 26.99 + qty5 * 36.99 + qty6 *39.99)
    
    if (quant >= 5 && total <= 100) {
        total *= 0.95;
    }
    else if (quant >= 5 && total > 100) {
        total *= 0.95;
        if (total > 100) {
            total *= 0.95;
        }
    }
    else if (quant < 5 && total > 100) {
        total *= 0.95;
    }

    total = total.toFixed(2)

    totalq.innerHTML = quant
    totalmoney.innerHTML = total

}

function valid() {
    var valid = true
    if (totalq.innerHTML < 1) {
        alert("QUANTIDADE INVÁLIDA!!")
        valid = false
    }
    document.getElementById("qty1").value = qty1
    document.getElementById("qty2").value = qty2
    document.getElementById("qty3").value = qty3
    document.getElementById("qty4").value = qty4
    document.getElementById("qty5").value = qty5
    document.getElementById("qty6").value = qty6
    return valid
}

function clean() {
    qty1 = 0
    qty2 = 0
    qty3 = 0
    qty4 = 0
    qty5 = 0
    qty6 = 0
    totalq.innerHTML = 0
    totalmoney.innerHTML = 0
}