$(document).ready(function() {
    $("input[type='submit']").click(function() {
        var valid = true

        //PARA A MODAL
        var nomeValid = true
        var moradaValid = true
        var emailValidLength = true
        var emailValidSyntax = true
        var localValid = true
        //------------------

        //------------------NOME------------------
        var nome = $("#Nome").val().length
        var nomeError = $("#NomeError")
        if (nome < 10 || nome > 100) {
            nomeError.removeClass("d-none")
            valid = false
            nomeValid = false
        }
        else {
            nomeError.addClass("d-none")
            nomeValid = true
        }

        //------------------MORADA------------------
        var morada = $("#Morada").val().length
        var moradaError = $("#MoradaError")
        if (morada < 20 || morada > 200) {
            moradaError.removeClass("d-none")
            valid = false
            moradaValid = false
        }
        else {
            moradaError.addClass("d-none")
            moradaValid = true
        }

        //------------------EMAIL------------------
        var email = $("#Email").val()
        var emailErrorLength = $("#EmailErrorLength")
        var emailErrorSyntax = $("#EmailErrorSyntax")
        if (email.length < 10 || email.length > 100) {
            emailErrorLength.removeClass("d-none")
            valid = false
            emailValidLength = false
        }
        else {
            emailErrorLength.addClass("d-none")
            emailValidLength = true
        }
        if ((email.lastIndexOf("@") > email.lastIndexOf(".")) || (email.lastIndexOf("@") == -1 || email.lastIndexOf(".") == -1)) {
            emailErrorSyntax.removeClass("d-none")
            valid = false
            emailValidSyntax = false
        }
        else {
            emailErrorSyntax.addClass("d-none")
            emailValidSyntax = true
        }

        //------------------LOCAL------------------
        var local = $("input[type=checkbox]:checked").length
        var localError = $("#LocalError")
        if (local < 2) {
            localError.removeClass("d-none")
            valid = false
            localValid = false
        }
        else {
            localError.addClass("d-none")
            localValid = true
        }

        //------------------MODAL------------------
        var modal = $("#Modal")
        var erros = $("#Erros")
        var message = ""
        if (valid == false) {
            modal.modal("show")
            if (nomeValid == false) {
                message += "<strong>NOME </strong></br>" + nomeError.html() + "</br>"
            }
            if (moradaValid == false) {
                message += "<strong>MORADA </strong></br>" + moradaError.html() + "</br>"
            }
            if (emailValidLength == false || emailValidSyntax == false) {
                message += "<strong>EMAIL </strong></br>"
            }
            if (emailValidLength == false) {
                message += emailErrorLength.html() + "</br>"
            }
            if (emailValidSyntax == false) {
                message += emailErrorSyntax.html() + "</br>"
            }
            if (localValid == false) {
                message += "<strong>LOCAL </strong></br>" + localError.html() + "</br>"
            }
            erros.html(message)
        }

        return valid
    })

    $("input[type='checkbox']").click(function () {
        var frente = $("#RelvaFrente").is(":checked")
        var tras = $("#RelvaTras").is(":checked")
        var lateral = $("#BancadaLateral").is(":checked")
        var central = $("#BancadaCentral").is(":checked")
        var local = $("input[type=checkbox]:checked").length
        var preco = $("#Maximo")

        if (local < 1) {
            preco.val("0€")
        }
        else {
            if (frente) {
                preco.val("100€")
            }
            else if (tras) {
                preco.val("80€")
            }
            else if (central) {
                preco.val("65€")
            }
            else if (lateral) {
                preco.val("50€")
            }
        }
    })
})