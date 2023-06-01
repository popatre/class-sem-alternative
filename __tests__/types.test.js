const { Musician, Drummer, JohnBonham } = require("../classes/musician");
describe("Drummer", () => {
    describe("properties", () => {
        test("should extend Musician class", () => {
            const testDrummer = new Drummer();
            expect(testDrummer).toBeInstanceOf(Musician);
        });
        test.todo("should have instrument set to drums");
    });
    describe("methods", () => {
        test.todo(".playGig - adds flat fee of 500");
        test.todo(
            ".willDuet - should return appropriate boolean depending on instrument"
        );
    });
});

xdescribe("JohnBonham", () => {
    test("should be instance of Drummer", () => {
        const testJohn = new JohnBonham();

        expect(testJohn).toBeInstanceOf(Drummer);
    });
    xtest("should contains expected values for John Bonham", () => {
        const testJohn = new JohnBonham();
        expect(testJohn.name).toBe("John");
        expect(testJohn.money).toBe(100000);
        expect(testJohn.skill).toBe("stick spin");
    });
});
