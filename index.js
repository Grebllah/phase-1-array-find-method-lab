// code your solution here
function winYear(record){
    return record.result === "W"
}
const superbowlWin = (year) => {
    const yearW = year.find(winYear)
    if (yearW) {
        return yearW.year
    }
}