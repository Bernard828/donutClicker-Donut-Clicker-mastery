const total = document.querySelector('.total')

const donut = new Donut();

let isClickActive = false;
let intervalId = null;


const donutMaker = function () {
    TotalCount();
    //     setupAddDonutsButton();
    //     setupAutoClicker();
    //     setupDonutMultipier();
}

const TotalCount = function () {
    total.innerHTML = donut.getTotalDonuts();    
}

const setupAddOneClickButton = function () {
    totalElement.addEventListener('click', function () {
        donut.addOne();
    })
}

donutMaker();
