let from = document.querySelector('#from')
let to = document.querySelector('#to')
let amount = document.querySelector('#amount')
let submit = document.querySelector('.exchange_btn')
let resInp = document.querySelector('#resInp')
let coin_1 = document.querySelector('#coin_1')
let coin_2 = document.querySelector('#coin_2')

let smbls = JSON.parse(localStorage.getItem('symbols'))

let myCredentials = {
    headers: {
        apiKey: "A8aGB017H8W9vKUeZHhLZlVDOMHFk6zA"
    }
}

if(smbls) {
    createOpts(smbls, from)
    createOpts(smbls, to)
} else {
    axios.get('https://api.apilayer.com/fixer/symbols', myCredentials).then(res => {
        localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
    
        createOpts(res.data.symbols, from)
        createOpts(res.data.symbols, to)
    })
}


function createOpts(obj, select) {
    for(let key in obj) {
        let opt = new Option(key, key)

        select.append(opt)
    }
}


submit.onclick = () => {
    axios.get(`https://api.apilayer.com/fixer/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, myCredentials)
        .then(res => {
            resInp.value = res.data.result
            coin_1.innerHTML = `${res.data.query.amount} ${res.data.query.from}`
            coin_2.innerHTML = `${res.data.result} ${res.data.query.to}`
        })
}