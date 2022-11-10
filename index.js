let pagesBtn = document.querySelectorAll('nav a')
let pages = document.querySelectorAll('.content')

pagesBtn.forEach(btn => {
    btn.onclick = () => {
        let pageid = btn.getAttribute('data-p')

        pages.forEach(p => {
            console.log(pageid, p.id);
            if(pageid === p.id) {
                p.classList.add('activePage')
            } else {
                p.classList.remove('activePage')
            }
        });

        pagesBtn.forEach(b => b.classList.remove('activeA'))
        btn.classList.add('activeA')

    }
})


let form_1 = document.forms.coin_1
let coin1 = document.querySelector('#coin_1')
let form_2 = document.forms.coin_2

let coin2 = document.querySelector('#coin_2')
// console.log(coin1);
form_1.onkeyup = (event) =>{
    event.preventDefault()

    let coin = {

    }

    let fmr = new FormData(form_1)


    fmr.forEach((value, key) => {
        coin[key] = value
    })

    console.log(coin);
    coin1.innerHTML = coin.coin_1+ ' ' + 'BTC'

}
form_2.onkeyup = (event) =>{
    event.preventDefault()
    console.log('aa');
    let coin = {

    }

    let fmr = new FormData(form_2)


    fmr.forEach((value, key) => {
        coin[key] = value
    })

    console.log(coin);

    coin2.innerHTML = coin.coin_2 + ' ' + 'GRC'
}


