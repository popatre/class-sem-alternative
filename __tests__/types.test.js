const { Musician, Drummer, JohnBonham } = require("../classes/musician");
const { Bassist } = require("../classes/musicianTypes");

describe("Drummer", () => {
    describe("properties", () => {
        test("should extend Musician class", () => {
            const testDrummer = new Drummer();
            expect(testDrummer).toBeInstanceOf(Musician);
        });
        test("should have instrument set to drums", () => {
            const testDrummer = new Drummer("Dave", 10, "hit stuff");
            expect(testDrummer.instrument).toBe("drums");
        });
    });
    describe("methods", () => {
        test(".playGig - adds flat fee of 500", () => {
            const testDrummer = new Drummer("Dave", 100, "hit stuff");
            testDrummer.playGig();
            expect(testDrummer.money).toBe(600);
        });
        test(".willDuet - should return appropriate boolean depending on instrument", () => {
            const testDrummer = new Drummer("Dave", 100, "hit stuff");
            const testBass = new Bassist("Chris", 100);

            const bassAndDrummerDuet = testDrummer.willDuet(testBass);
            const drummerAndDrummerDuet = testDrummer.willDuet(testDrummer);

            expect(bassAndDrummerDuet).toBe(false);
            expect(drummerAndDrummerDuet).toBe(true);
        });
    });
});

describe("JohnBonham", () => {
    test("should be instance of Drummer", () => {
        const testJohn = new JohnBonham();

        expect(testJohn).toBeInstanceOf(Drummer);
        console.log(testJohn);
    });
    test("should contains expected values for John Bonham", () => {
        const testJohn = new JohnBonham();
        expect(testJohn.name).toBe("John");
        expect(testJohn.money).toBe(100000);
        expect(testJohn.skill).toBe("stick spin");
    });
});
