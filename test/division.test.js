import division from './../src/division.js'

describe("division", () => {
    it("should return 5 for 10 and 2", () => {
        expect(division(10, 2)).toBe(5);
    })
})