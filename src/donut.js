
class Donut {
    constructor() {
        this.count = 0;
        this.total = 0;
         
    }

    getCount() {        //getSpeed
        return this.count;
    }

    getTotalAmount() {          //getDistTravld
        return this.total;
    }

    isAdding() {        //isDriving
        return this.count > 0;
    }

    addDonut() {            //addMile
        this.total += 1;
        // if (this.count < 20) {
        //     this.total += 20;
        // }
    }
    addMultiplier() {       //accelerate
        this.count += 10;
    }
    
    isMultiplying() {
        return this.count > 50;
    }

    changeMultiplier() {
        this.count += 100;
        if (this.count > 150) {
            this.count = 0;
        }
    }
}