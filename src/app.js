const addOneElement = document.querySelector('.addButton')
const
const donut = new Donut();

let isClickActive = false;
let intervalId = null;

const donutMaker = function () {
    setupAddDonutsButton();
    //changeMultbutton
}

const updateClicks = function () {
    
}

const addDonutOnClick = function () {
    if (donut.isAdding() && !isClickActive) {
        totalActive();
    }
    else if (!donut.isAdding() && isClickActive) {
        console.log(`clearing id=${intervalId}`)
        clearInterval(intervalId);
        isClickActive = false;
    }
}

const clickerActive = function () {
    console.log('set interval is active')
    intervalId = setInterval(function () {
        donut.addOne();
        ;
        isClickActive = true;
    }, 1000)
}

const setupAddDonutsButton = function () {
    addOneElement.addEventListener('click', function () {
        donut.addOne();
        console.log(donut.getTotalDonuts());
        updateClicks();
        addDonutOnClick();
    })
}
