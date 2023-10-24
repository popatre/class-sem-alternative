const Venue = require("../classes/venue");
const { JohnBonham, Bassist } = require("../classes/musicianTypes");
describe("Venue", () => {
    test("should have currentlyBooked property set to array", () => {
        const testVenue = new Venue();
        expect(testVenue.currentlyBooked).toEqual([]);
    });

    test(".makeBooking adds performer to currently booked", () => {
        const consoleSpy = jest.spyOn(console, "log");
        const testVenue = new Venue();
        const John = new JohnBonham();
        testVenue.makeBooking(John);
        expect(consoleSpy).toHaveBeenCalledWith(
            `You have booked ${John.name} to perform`
        );
        expect(testVenue.currentlyBooked).toEqual([John]);
    });
    test(".makeBooking does not add performer, if one is already booked", () => {
        const testVenue = new Venue();
        const John = new JohnBonham();
        const Barry = new Bassist("Baz");
        testVenue.makeBooking(John);
        testVenue.makeBooking(Barry);

        expect(testVenue.currentlyBooked).toEqual([John]);
    });
    test(".makeBooking returns currently performing musician when invoked with no arguments and musician booked", () => {
        const testVenue = new Venue();
        const John = new JohnBonham();

        const consoleSpy = jest.spyOn(console, "log");

        testVenue.makeBooking(John);

        const actual = testVenue.makeBooking();

        expect(actual).toEqual(John);
        expect(consoleSpy).toHaveBeenCalledWith(`${John.name} get on stage!`);
    });
    test(".makeBooking notifies if there is no performer when invoked with no arguments", () => {
        const testVenue = new Venue();
        const consoleSpy = jest.spyOn(console, "log");
        testVenue.makeBooking();

        expect(consoleSpy).toHaveBeenCalledWith(
            `There no one booked to perform`
        );
    });
});
