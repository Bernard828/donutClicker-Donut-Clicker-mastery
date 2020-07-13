const addOneElement = document.querySelector('.addButton')
const donut = new Donut();

let isClickActive = false;
let intervalId = null;
const donutMaker = function () {
    //addDonutbutton
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
        donut.
    })
}
const setupAcceleratorButton = function () {
    acceleratorElement.addEventListener('click', function () {
        car.accelerate();
        console.log(car.getSpeed());
        updateSpeedometer();
        warnIfSpeeding();
        addMilesIfDriving();
    })
}