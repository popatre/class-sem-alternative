class Venue {
    constructor() {
        this.currentlyBooked = [];
    }

    makeBooking(musician) {
        if (this.isVacant()) {
            this.currentlyBooked.push(musician);
            console.log(`You have booked ${musician.name}`);
        } else {
            console.log(`${musician.name} is already booked to perform`);
            return this.currentlyBooked[0];
        }
    }
    isVacant() {
        return this.currentlyBooked.length === 0;
    }
    checkBill() {
        return "no show";
    }
}

module.exports = Venue;
