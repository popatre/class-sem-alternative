const Venue = require("../classes/venue");
const { JohnBonham } = require("../classes/musicianTypes");
describe("Venue", () => {
    test("should have currentlyBooked property set to array", () => {
        const testVenue = new Venue();
        expect(testVenue.currentlyBooked).toEqual([]);
    });
    test(".makeBooking adds to currently booked", () => {
        const testVenue = new Venue();
        const John = new JohnBonham();
        testVenue.makeBooking(John);
        expect(testVenue.currentlyBooked[0]).toEqual(John);
    });
    // test(".makeBooking returns currently booked when already a booking", () => {
    //     const testVenue = new Venue();
    //     const John = new JohnBonham();
    //     testVenue.makeBooking(John);
    //     expect(testVenue.makeBooking(John)).toEqual(John);
    // });
    test(".makeBooking returns currently performing musician when invoked with no arguments and musician booked", () => {
        const consoleSpy = jest.spyOn(console, "log");
        const testVenue = new Venue();
        const John = new JohnBonham();
        testVenue.makeBooking(John);
        expect(testVenue.makeBooking()).toEqual(John);
        expect(consoleSpy).toHaveBeenCalledWith(`John - go perform now`);
    });
    test(".makeBooking notifies if not performer when invoked with no arguments", () => {
        const consoleSpy = jest.spyOn(console, "log");
        const testVenue = new Venue();
        testVenue.makeBooking();
        expect(consoleSpy).toHaveBeenCalledWith("No one to go on stage");
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
    test(".checkBill - returns no show when no one booked", () => {
        const testVenue = new Venue();
        expect(testVenue.checkBill()).toBe("no show");
    });
    test(".checkBill - returns musician name booked to perform if there is someone", () => {
        const testVenue = new Venue();
        const John = new JohnBonham();
        testVenue.makeBooking(John);
        expect(testVenue.checkBill()).toBe("John");
    });
});
