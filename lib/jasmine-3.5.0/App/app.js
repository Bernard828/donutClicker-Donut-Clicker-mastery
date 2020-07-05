const car = new Car();

let isOdometerActive = false;
let intervalId = null;

const carSetup = function () {
    setupAcceleratorButton();
    setupBrakeButton();
}

const updateSpeedometer = function () {
    speedometerElement.innerText = car.getSpeed();
}

const updateOdometer = function () {
    odometerElement.innerText = car.getDistanceTravelled();
}

const addMilesIfDriving = function () {
    if (car.isDriving() && !isOdometerActive) {
        odometerActive();
    }
    else if (!car.isDriving() && isOdometerActive) {
        console.log(`clearing id=${intervalId}`)
        clearInterval(intervalId);
        isOdometerActive = false;
    }
}

const odometerActive = function () {
    console.log('set interval is active')
    intervalId = setInterval(function () {
        car.addMile();
        updateOdometer();
        isOdometerActive = true;
    }, 1000);
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

const setupBrakeButton = function () {
    brakeElement.addEventListener('click', function () {
        car.brake();
        updateSpeedometer();
        warnIfSpeeding();
        addMilesIfDriving();
    })
}

const warnIfSpeeding = function () {
    if (car.isSpeeding()) {
        warningElement.classList.remove('hidden');
    }
    else {
        warningElement.classList.add('hidden');
    }
}


carSetup();

updateSpeedometer();
updateOdometer();