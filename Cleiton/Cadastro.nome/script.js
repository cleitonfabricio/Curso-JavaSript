let nome = document.getElementById('txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let Name = []

function pessoa(n) {
    if(nome.value != '') {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(nome.value) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(pessoa(nome.value) && !inLista(nome.value, Name)) {
        Name.push(nome.value)
        let item = document.createElement('option')
        item.text = `O nome ${nome.value} é foi adicinado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Adicione o nome ou nome já tem na lista!')
    }
    nome.value = ''
    nome.focus()
}

function pesquisa() {
    if (Name.length == 0) {
        window.alert('Adicione um NOME antes de pesquisa!')
    } else {
        let tot = Name.length
        res.innerHTML = ''
        res.innerHTML += `<p>Foi adicionado ${tot} nomes na lista.</p>`
    }
}