const produtosseguros = document.querySelector(".produtos-seguros")
const produtosconsorcios = document.querySelector(".produtos-consorcio")

const segauto = document.querySelector(".div-automovel")
const segempresarial = document.querySelector(".div-empresarial")
const segresidencial = document.querySelector(".div-residencial")
const segvida = document.querySelector(".div-vida")
const segportateis = document.querySelector(".div-portateis")
const segagricola = document.querySelector(".div-agricola")
const consauto = document.querySelector(".div-consautomovel")
const consimovel = document.querySelector(".div-consimovel")



function saibamaisauto() {
    produtosseguros.style.visibility = "hidden"
    produtosseguros.style.position = "fixed"
    produtosseguros.style.left = "-1000px"
    segauto.style.visibility = "visible"
    segauto.style.position = "unset"
    segauto.style.left = "auto"
    window.scrollTo(0, 0)
}

function saibamaisempresarial() {
    produtosseguros.style.visibility = "hidden"
    produtosseguros.style.position = "fixed"
    produtosseguros.style.left = "-1000px"
    segempresarial.style.visibility = "visible"
    segempresarial.style.position = "unset"
    segempresarial.style.left = "auto"
    window.scrollTo(0, 0)
}

function saibamaisresidencial() {
    produtosseguros.style.visibility = "hidden"
    produtosseguros.style.position = "fixed"
    produtosseguros.style.left = "-1000px"
    segresidencial.style.visibility = "visible"
    segresidencial.style.position = "unset"
    segresidencial.style.left = "auto"
    window.scrollTo(0, 0)
}

function saibamaisvida() {
    produtosseguros.style.visibility = "hidden"
    produtosseguros.style.position = "fixed"
    produtosseguros.style.left = "-1000px"
    segvida.style.visibility = "visible"
    segvida.style.position = "unset"
    segvida.style.left = "auto"
    window.scrollTo(0, 0)
}

function saibamaisportateis() {
    produtosseguros.style.visibility = "hidden"
    produtosseguros.style.position = "fixed"
    produtosseguros.style.left = "-1000px"
    segportateis.style.visibility = "visible"
    segportateis.style.position = "unset"
    segportateis.style.left = "auto"
    window.scrollTo(0, 0)
}

function saibamaisagricola() {
    produtosseguros.style.visibility = "hidden"
    produtosseguros.style.position = "fixed"
    produtosseguros.style.left = "-1000px"
    segagricola.style.visibility = "visible"
    segagricola.style.position = "unset"
    segagricola.style.left = "auto"
    window.scrollTo(0, 0)
}

function saibamaisautomovel() {
    produtosconsorcios.style.visibility = "hidden"
    produtosconsorcios.style.position = "fixed"
    produtosconsorcios.style.left = "-1000px"
    consauto.style.visibility = "visible"
    consauto.style.position = "unset"
    consauto.style.left = "auto"
}

function saibamaisimovel() {
    produtosconsorcios.style.visibility = "hidden"
    produtosconsorcios.style.position = "fixed"
    produtosconsorcios.style.left = "-1000px"
    consimovel.style.visibility = "visible"
    consimovel.style.position = "unset"
    consimovel.style.left = "auto"
}

function voltarprodutos() {
    produtosseguros.style.visibility = "visible"
    produtosseguros.style.position = "unset"
    produtosseguros.style.left = "auto"

    produtosconsorcios.style.visibility = "visible"
    produtosconsorcios.style.position = "unset"
    produtosconsorcios.style.left = "auto"

    segauto.style.visibility = "hidden"
    segauto.style.position = "fixed"
    segauto.style.left = "-1000px"

    segempresarial.style.visibility = "hidden"
    segempresarial.style.position = "fixed"
    segempresarial.style.left = "-1000px"

    segresidencial.style.visibility = "hidden"
    segresidencial.style.position = "fixed"
    segresidencial.style.left = "-1000px"
    
    segvida.style.visibility = "hidden"
    segvida.style.position = "fixed"
    segvida.style.left = "-1000px"

    segportateis.style.visibility = "hidden"
    segportateis.style.position = "fixed"
    segportateis.style.left = "-1000px"

    segagricola.style.visibility = "hidden"
    segagricola.style.position = "fixed"
    segagricola.style.left = "-1000px"

    consauto.style.visibility = "hidden"
    consauto.style.position = "fixed"
    consauto.style.left = "-1000px"

    consimovel.style.visibility = "hidden"
    consimovel.style.position = "fixed"
    consimovel.style.left = "-1000px"
}
