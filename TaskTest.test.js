const { scheduler } = require("timers/promises");
let {addScores, squareGrades,testScores, distributeBooks, schedule} = require("./Task.js");

test("add 5 to student's scores", () => {
    let scores = [85, 92, 78, 88, 95]
    let result = addScores(scores)
    expect(result).toEqual([90, 97, 83, 93, 100])
})

test("squaring grades", () =>{
    let number = [2,4,6,8,10]
    let answer = squareGrades(number)
    expect(answer).toEqual([4, 16, 36, 64, 100])
})

test("testing scores", () =>{
    let array = [10, 30, 20, 50, 40, 60, 100, 90, 70, 80]
    let total = testScores(array)
    expect(total).toEqual([100, 90, 70, 80])
})

test("distributing books", ()=>{
    let member = [{name:"Emily", book:null}, {name: "Jack", book: null}, {name: "Sophia", book: null}, {name:"Daniel", book:null}]
    let book =  [{name:"Emily", book:book},{name:"Jack", book:book},{name:"Sophia", book:book},{name:"Daniel", book:book}]
    let result = distributeBooks(members,book)
    expect(book).toEqual([result])

})

test("scheduling time", () => {
        let time = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"]
        let answer = ["1:00PM", "3:00PM", "5:00PM"]
        let result = schedule(time)
        expect(result).toEqual(answer)
    
})