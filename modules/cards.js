function cardReload(arr, place) {
    for(let item of arr) {
        place.innerHTML += `
            <div class="container">
                <div class="top-side">
                    <div class="left-side">
                        <div class="left-into">
                            <img src="https://th.bing.com/th/id/R.4eafd48f4f5fff8b62bfa65065a5e702?rik=oN5vwGeMwI2h3g&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpapirus-team%2fpapirus-apps%2f512%2fdash-qt-icon.png&ehk=iqwhHKYJZ0%2f8bPFZuduYDCzUrowWmSPJgIe9B5EFDPQ%3d&risl=&pid=ImgRaw&r=0"
                                width="100px" alt="" />
                        </div>
                        <div class="right-into">
                            <h2>DASH</h2>
                            <h2>1.93%</h2>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="top-into">
                            <h2>EUR</h2>
                            <h2>USD</h2>
                            <h2>BTC</h2>
                        </div>
                        <div class="middle-into">
                            <h2>1,307.96 <span>EUR</span></h2>
                        </div>
                        <div class="bottom-into">
                            <h2>
                                <span> Volume </span>
                            </h2>
                            <h2>18,423</h2>
                            <h2>
                                <span> DASH </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <img src="./public/images/volna.svg" width="450px" alt="" />
                </div>
            </div>
        `
    }
}


cardReload([1,1,1,1,1,1,1,1,1], document.querySelector('.container-big'))