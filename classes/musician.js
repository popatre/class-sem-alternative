class Musician {
    constructor(name, instrument, skillLevel, money, skill = "make music") {
        this.name = name;
        this.instrument = instrument;
        this.skillLevel = skillLevel;
        this.money = money;
        this.skill = skill;
    }
    specialSkill() {
        return `My special skill is ${this.skill}`;
    }
    playGig(pay) {
        this.money += pay;
    }
    willDuet() {
        return true;
    }
}

module.exports = Musician;
