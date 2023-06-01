class Musician {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.skill = "make music";
    }
    specialSkill() {
        return `My special skill is ${this.skill}`;
    }
    playGig(pay) {
        this.money += pay;
    }
}

module.exports = Musician;
