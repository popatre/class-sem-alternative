class Venue {
    constructor() {
        this.currentlyBooked = [];
    }

    makeBooking(musician) {
        if (this.currentlyBooked.length) {
            console.log(`${this.currentlyBooked[0].name} get on stage!`);
            return this.currentlyBooked[0];
        }
        if (!musician) {
            console.log(`There no one booked to perform`);
            return;
        }

        this.currentlyBooked.push(musician);
        console.log(`You have booked ${musician.name} to perform`);
    }
}

module.exports = Venue;
