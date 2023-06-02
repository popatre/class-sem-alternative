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
class Drummer {}

class JohnBonham {}

module.exports = { Musician, Drummer, JohnBonham };
