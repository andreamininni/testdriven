import subtraction from './../src/subtraction.js'

describe("subtraction", () => {
    it("should return 1 for 3 and 2", () => {
        expect(subtraction(3, 2)).toBe(1);
    })
})