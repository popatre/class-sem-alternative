const Musician = require("../classes/musician");

describe("Musician", () => {
    describe("properties", () => {
        test("should be an object", () => {
            const testMusician = new Musician();
            expect(testMusician).toBeInstanceOf(Object);
        });
        test("should have assignable name property", () => {
            const testMusician = new Musician("Tom");
            expect(testMusician.name).toBe("Tom");
        });
        xtest("should have assignable instrument property", () => {
            const testMusician = new Musician("Tom", "clarinet");
            expect(testMusician.instrument).toBe("clarinet");
        });
        test("should have assignable skillLevel property", () => {
            const testMusician = new Musician("Tom", "clarinet", 10);
            expect(testMusician.skillLevel).toBe(10);
        });
        test("should have assignable money property", () => {
            const testMusician = new Musician("Tom", "clarinet", 10, 100);
            expect(testMusician.money).toBe(100);
        });
        xtest("should have assignable skill property", () => {
            const testMusician = new Musician(
                "Tom",
                "clarinet",
                10,
                100,
                "flutter"
            );
            expect(testMusician.skill).toBe("flutter");
        });
        xtest("skill should revert to default value if non given", () => {
            const testMusician = new Musician("Tom", "clarinet", 10, 100);
            expect(testMusician.skill).toBe("make music");
        });
    });
    describe.skip("methods", () => {
        test(".specialSkill - returns special skill string", () => {
            const testMusician = new Musician(
                "Tom",
                "clarinet",
                10,
                100,
                "flutter"
            );
            expect(testMusician.specialSkill()).toBe(
                `My special skill is flutter`
            );
        });
        test(".playGig - should add to musicians current money", () => {
            const testMusician = new Musician("Tom", "clarinet", 10, 100);
            // act
            testMusician.playGig(100);
            expect(testMusician.money).toBe(200);
        });
        test(".willDuet - should return confirm musician will duet", () => {
            const testMusician = new Musician("Tom", "clarinet", 10, 100);
            expect(testMusician.willDuet()).toBe(true);
        });
    });
});
