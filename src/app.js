const total = document.querySelector('.total')
const addOneButton = document.querySelector('.addButton')

const donut = new Donut();

let isClickActive = false;
let intervalId = null;


const donutMaker = function () {
    TotalCount();
    AddOneClickButton();
}

const TotalCount = function () {
    total.innerHTML = donut.getTotalDonuts();
}

const AddOneClickButton = function () {
    addOneButton.addEventListener('click', function () {
        console.log('button clicked')
        donut.addOne();
        TotalCount();
    })
}

donutMaker();

