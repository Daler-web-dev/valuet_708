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


const arr = [
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'PM 03:46',
        date: '15 july 2020',
        btc: '0000.9',
        status: 'Error'
    },
    {
        time: 'PM 11:46',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Completed'
    },
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'PM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    }
]

const list = document.querySelector('.list')
function reload(arr, place) {
    place.innerHTML = ''
    for (const item of arr) {
        const item1 = document.createElement('div')
        const leftList = document.createElement('div')
        const leftInfo = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const roll = document.createElement('div')
        const img = document.createElement('img')
        const rightToken = document.createElement('div')
        const tokenImg = document.createElement('img')
        const p3 = document.createElement('p')
        const rightbtc = document.createElement('div')
        const p4 = document.createElement('p')
        const btn = document.createElement('button')

        item1.classList.add('item')
        leftList.classList.add('left-list-graph')
        leftInfo.classList.add('left-info')
        roll.classList.add('roll')
        roll.classList.add('roll2')
        rightToken.classList.add('right-token')
        rightbtc.classList.add('right-btc-status')
        btn.classList.add('btn-status')
        p1.innerHTML = item.time
        p2.innerHTML = item.date
        tokenImg.src = './public/icons/arrow.svg'
        img.src = './public/icons/bitcoin.png'
        p3.innerHTML = '74EKRJMXkhKDR5dj34578fgirwE22sfg'
        p4.innerHTML = item.btc
        btn.innerHTML = item.status
        if(item.status === 'Error'){
            btn.classList.add('error')
        } else if(item.status === 'Completed'){
            btn.classList.add('completed')
        }

        place.append(item1)
        item1.append(leftList, rightbtc)
        leftList.append(leftInfo, rightToken)
        leftInfo.append(p1, p2, roll)
        roll.append(img)
        rightToken.append(tokenImg, p3)
        rightbtc.append(p4, btn)

    }
}
reload(arr, list)