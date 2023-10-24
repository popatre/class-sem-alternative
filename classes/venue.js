class Venue {
    constructor() {
        this.currentlyBooked = [];
    }

    makeBooking() {}
    isVacant() {
        return this.currentlyBooked.length === 0;
    }
}

module.exports = Venue;
