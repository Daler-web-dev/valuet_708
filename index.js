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

