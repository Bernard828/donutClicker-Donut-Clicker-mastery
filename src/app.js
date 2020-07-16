const addOneElement = document.querySelector('.addButton')

const donut = new Donut();

let isClickActive = false;
let intervalId = null;

const donutMaker = function () {
    setupAddDonutsButton();
    //changeMultbutton
}

const updateClicks = function () {
addOneElement

}


const setupAddDonutsButton = function () {
    addOneElement.addEventListener('click', function () {
        donut.addOne();
        console.log(donut.getTotalDonuts());
        //updateClicks();
        addDonutOnClick();
    })
}

