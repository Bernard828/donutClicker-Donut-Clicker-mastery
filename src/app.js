const total = document.querySelector('.total')
const autoClick = document.querySelector('.autoClick')
const addOneButton = document.querySelector('.addButton')
const autoClickButton = document.querySelector('.autoClick_Button')

const donut = new Donut();


const donutMaker = function () {
    TotalCount();
    AddOneClickButton();
    AutoClickUpdate();
    buyAutoClickButton();
}


const TotalCount = function () {
    total.innerHTML = donut.getTotalDonuts();
}

const AutoClickUpdate = function () {
    autoClick.innerHTML = donut.getAutoClickerCount();
}


const AddOneClickButton = function () {
    addOneButton.addEventListener('click', function () {
        console.log('button clicked')
        donut.addOne();
        TotalCount();
    })
}

const buyAutoClickButton = function () {
    autoClickButton.addEventListener('click', function () {
        console.log('buy button clicked')
        donut.addAutoClicker();
        AutoClickUpdate();
    })
}

donutMaker();
