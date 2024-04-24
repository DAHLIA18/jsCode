// const { forOfStatement } = require("@babel/types");

function addScores(scores){
    return scores.map((num)=> num + 5)
console.log(answer);
}
addScores([85, 92, 78, 88, 95])


function squareGrades(number){
    return number.map((num) => num * num);
    console.log(answer);
}
squareGrades([2,4,6,8,10])


function testScores(array){
    return array.filter((num)=> num >= 70);
    console.log(result);
}
testScores([10, 30, 20, 50, 40, 60, 100, 90, 70, 80])


function distributeBooks(members, book){
  for (const member of members) {
    member.book = book
}
return members
}

function afternoonClasses(time) {
    if (time === "12:00PM" || time === "1:00PM" || time === "2:00PM" || time === "3:00PM" || time === "5:00PM") {
        return time
    }
}

function schedule(timing){
    return timing.filter(time => afternoonClasses(time))

}
module.exports ={addScores,squareGrades,testScores,distributeBooks,schedule}