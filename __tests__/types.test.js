const { Drummer, Bassist, JohnBonham } = require("../classes/musicianTypes");
const Musician = require("../classes/musician");

describe("Drummer", () => {
    describe("properties", () => {
        test("should extend Musician class ", () => {
            const testDrummer = new Drummer();
            expect(testDrummer).toBeInstanceOf(Musician);
        });
        test("should have instrument set to drums", () => {
            const testDrummer = new Drummer("Tom");
            expect(testDrummer.instrument).toBe("drums");
        });
        test("should have skill set to stick spin", () => {
            const testDrummer = new Drummer("Tom", 100, 1000);
            expect(testDrummer.skill).toBe("stick spin");
        });
    });
    describe("methods", () => {
        test(".playGig - adds flat fee of 500", () => {
            const testDrummer = new Drummer("Tom", 100, 1000);
            testDrummer.playGig();
            expect(testDrummer.money).toBe(1500);
        });
        test(".willDuet - should return appropriate boolean depending on instrument", () => {
            const testDrummer = new Drummer("Tom", 100, 1000);
            expect(testDrummer.willDuet("bass")).toBe(true);
            expect(testDrummer.willDuet("singer")).toBe(false);
        });
    });
});

describe("JohnBonham", () => {
    test("should be instance of Drummer", () => {
        const testJohn = new JohnBonham();
        expect(testJohn).toBeInstanceOf(Drummer);
    });
    test("should contains expected values for John Bonham", () => {
        const testJohn = new JohnBonham();
        expect(testJohn.name).toBe("John");
        expect(testJohn.skillLevel).toBe(200);
        expect(testJohn.money).toBe(100000);
    });
});
