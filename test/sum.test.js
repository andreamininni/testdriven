import sum from './../src/sum.js';

describe("sum", () => {
    it("should return 2 for 1 and 1", () => {
        expect(sum(5, 6)).toBe(11);
    })

    //! la funzione somma, se lanciata con uno dei due parametri = 0, deve ritornare l'altro parametro
    it("should return other number if one of them is 0", () => {
        expect(sum(0, 3)).toBe(3);
        expect(sum(4, 0)).toBe(4);
    })
})
