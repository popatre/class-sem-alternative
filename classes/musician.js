class Musician {
    constructor(name, money, skill = "make music") {
        this.name = name;
        this.money = money;
        this.skill = skill;
    }
    specialSkill() {
        return `My special skill is ${this.skill}`;
    }
    playGig(pay) {
        this.money += pay;
    }
}
class Drummer extends Musician {
    constructor(name, money, skill) {
        super(name, money, skill);
        this.instrument = "drums";
        this.hates = "bass";
    }
    playGig() {
        this.money += 500;
    }
    willDuet(musician) {
        if (musician.instrument === this.hates) {
            return false;
        }
        return true;
    }
}

class JohnBonham extends Drummer {
    constructor() {
        super("John", 100000, "stick spin");
    }
}

module.exports = { Musician, Drummer, JohnBonham };
