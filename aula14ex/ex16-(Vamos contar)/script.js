function Contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var Pas = document.getElementById('pas')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || Pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:<br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(Pas.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO1')
            p = 1
        }
        if (i < f) {  
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{2705}`
    }
}