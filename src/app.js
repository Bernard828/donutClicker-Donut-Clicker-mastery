const addDonuts = document.querySelector('donutsAdded');
const totalDonuts = document.querySelector('totalDonuts');
const bakerAlert = document.querySelector('warning');
const clickerButton = document.querySelector('addClicker');
const multButton = document.querySelector('donutMultiplier');


const donut = new Donut();

let isCountActive = false;
let intervalId = null;

const donutClicker = function () {
    setupClickerButton();
    setupMultiplierButton();
}
const updateAutoClicker = function () {
    addDonuts.innerText = donut.getCount();
}

const updateTotalAmount = function () {
    totalDonuts.innerText = donut.getTotalAmount();
}

const totalViewActive = function () {
    console.log('set inteval is active')
    intervalId = setInterval(function () {
        donut.addDonut();
        updateTotalAmount();
        isCountActive = true;
    }, 1);
}

const donutsPerClick = function () {
    if (donut.isAdding() && !countActive) {
        totalViewActive();
    }
    else if (!donut.isAdding() && isCountActive) {
        console.log("clearing id=${intervalId")
        clearInterval(intervalId);
        isCountActive = false;
    }
}

const startCount = function () {
    clickerButton.addEventListener('click', function () {
        donut.addDonut();
        console.log(donut.getCount());
        updateAutoClicker();
        totalViewActive();
    })
}

const bakerAlert = function () {
    if (donut.changeMultiplier()) {
        bakerAlert.classList.remove('hidden');
    }
    else {
        bakerAlert.classList.add("hidden");
    }
}
donutClicker();

updateAutoClicker();
updateTotalAmount();