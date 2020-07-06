
class Donut {

    constructor() {
        this.count = 0;
        this.total = 0;
         
    }

    getCount() {
        return this.count;
    }

    getDonutAmtTotal() {
        return this.total;
    }

    isAdding() {
        return this.count > 0;
    }
 }

//     isSpeeding() {
//         return this.speed > 70;
//     }

//     accelerate() {
//         this.speed += 10;
//     }

//     brake() {
//         this.speed -= 7;
//         if (this.speed < 0) {
//             this.speed = 0;
//         }
//     }

//     addMile() {
//         this.distanceTravelled += 1;
//     }

// }