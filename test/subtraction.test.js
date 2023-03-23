import subtraction from './../src/subtraction.js'

describe("subtraction", () => {
    it("should return 1 for 3 and 2", () => {
        expect(subtraction(3, 2)).toBe(1);
    })
})

//! main o prod -> il codice in produzione ( online )
//! quality -> il codice del branch di test viene passato qui e da qui va in produzione
//! test -> il codice di produzione + il codice del rilascio ( deve essere testato per andare in produzione )
//! funzionalità