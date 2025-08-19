const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
    it("Handles midnight", () => {
        const timeInWords = convertTimeToWords("0:00");
        expect(timeInWords).toBe("midnight");
    });

    it("Handles 30 - 8:30", () => {
        const timeInWords = convertTimeToWords("8:30");
        expect(timeInWords).toBe("half past eight");
    });

    it("Handles times after 30 mins - 2:45", () => {
        const timeInWords = convertTimeToWords("2:45");
        expect(timeInWords).toBe("quarter to three");
    });

    it("Handles o'clock", () => {
        const timeInWords = convertTimeToWords("2:00");
        expect(timeInWords).toBe("two o'clock");
    });

    it("Handles time past hour", () => {
        const timeInWords = convertTimeToWords("2:03");
        expect(timeInWords).toBe("three past two");
    });
    it("Handles time teens", () => {
        const timeInWords = convertTimeToWords("2:11");
        expect(timeInWords).toBe("eleven past two");
    });
    it("Handles time <10 to hour", () => {
        const timeInWords = convertTimeToWords("2:55");
        expect(timeInWords).toBe("five to three");
    });
    it("Handles minutes == 20", () => {
        const timeInWords = convertTimeToWords("2:40");
        expect(timeInWords).toBe("twenty to three");
    });
    it("Handles minutes > 20", () => {
        const timeInWords = convertTimeToWords("2:37");
        expect(timeInWords).toBe("twenty three to three");
    });
});
