const Musician = require("./musician");

class Drummer extends Musician {
    constructor(name, skillLevel, money) {
        super(name, "drums", skillLevel, money, "stick spin");

        this.hates = "singer";
    }
    playGig() {
        // drummer get a flat fee of 500
        this.money += 500;
    }
    willDuet(performer) {
        // drummers will perform with anyone except singers
        return performer.instrument !== this.hates;
    }
}

const Drum = new Drummer("Danny", 10, 1000);
console.log(Drum);

class Bassist extends Musician {
    constructor(name, skillLevel, money) {
        super(name, "bass", skillLevel, money, "slap");
        this.hates = "guitar";
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

class JohnBonham extends Drummer {
    constructor() {
        super("John", 200, 100000);
    }
}

module.exports = { Drummer, Bassist, JohnBonham };
