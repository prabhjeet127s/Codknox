
const checkage = (age) => {
    return [age].filter(a => a > 0).map(
        a => {
            if (a >= 10 && a < 15) return "child"
            if (a >= 15 && a < 25) return "adult"
            if (a >= 25 && a < 50) return "adult people"
            if (a >= 50 && a < 70) return "old"
        }
    )
}

const answer=checkage(25);




