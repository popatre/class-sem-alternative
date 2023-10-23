class Venue {
    constructor() {
        this.currentlyBooked = [];
    }

    makeBooking(musician) {
        if (this.isVacant()) {
            if (!musician) {
                console.log("No one to go on stage");
            } else {
                this.currentlyBooked.push(musician);
            }
        } else {
            console.log(`${this.currentlyBooked[0].name} - go perform now`);
            return this.currentlyBooked[0];
        }
    }
    isVacant() {
        return this.currentlyBooked.length === 0;
    }
    checkBill() {
        if (!this.isVacant()) {
            return this.currentlyBooked[0].name;
        }
        return "no show";
    }
}

module.exports = Venue;
