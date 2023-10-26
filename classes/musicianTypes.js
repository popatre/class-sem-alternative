const { Musician } = require("./musician");

// class Drummer extends Musician {
//     constructor(name, skillLevel, money, skill = "fill") {
//         super(name, "drums", skillLevel, money, skill);

//         this.hates = "singer";
//     }
//     playGig() {
//         // drummer get a flat fee of 500
//         this.money += 500;
//     }
//     willDuet(performer) {
//         // drummers will perform with anyone except singers
//         return performer.instrument !== this.hates;
//     }
// }

class Bassist extends Musician {
    constructor(name, money) {
        super(name, money, "slap");
        this.hates = "guitar";
        this.instrument = "bass";
    }
    playGig() {
        // bass get a flat fee of 500
        this.money += 300;
    }
    willDuet(performer) {
        // bass will perform with anyone except guitar players
        return performer !== this.hates;
    }
}

// class JohnBonham extends Drummer {
//     constructor() {
//         super("John", 200, 100000, "stick spin");
//     }
// }

module.exports = { Bassist };
