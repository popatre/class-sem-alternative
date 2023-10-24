const Venue = require("../classes/venue");
const { JohnBonham } = require("../classes/musicianTypes");
describe("Venue", () => {
    test("should have currentlyBooked property set to array", () => {
        const testVenue = new Venue();
        expect(testVenue.currentlyBooked).toEqual([]);
    });

    test(".isVacant- return true when no one booked to perform ", () => {
        const testVenue = new Venue();
        expect(testVenue.isVacant()).toBe(true);
    });
    test(".isVacant - return false when currently a booking", () => {
        const testVenue = new Venue();
        const John = new JohnBonham();
        testVenue.makeBooking(John);
        expect(testVenue.isVacant()).toBe(false);
    });

    test(".makeBooking adds performer to currently booked if no one currently booked", () => {});
    test(".makeBooking does not add performer, if one is already booked", () => {});
    test(".makeBooking returns currently performing musician when invoked with no arguments and musician booked", () => {});
    test(".makeBooking notifies if there is no performer when invoked with no arguments", () => {});
});
