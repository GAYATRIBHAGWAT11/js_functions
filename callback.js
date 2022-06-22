// const perOne=(friend, callFrnd)=>{
// console.log(`im busy right now, im talking to ${friend}. i will call you back`)
// callFrnd();
// }
// const perTwo=()=>{
//     console.log(`hey whatsapp! i called you back dekha`);
// }
// perOne("gayatri", perTwo);


let num1=parseInt(process.argv[2])
let num2=parseInt(process.argv[3])

const modulusOfTwoNumbers=(num1, num2, solution)=>{
    console.log(num1%num2)
    return solution(num1, num2);

}
const divisionOfTwoNumbers=(num1,num2)=>{
    console.log(num1*num2);
}
modulusOfTwoNumbers(2,10, divisionOfTwoNumbers)

//  var fun1=setTimeout(divisionOfTwoNumbers,3000, num1,num2)
// divisionOfTwoNumbers(2,10)
// var fun2=setInterval(modulusOfTwoNumbers, 5000,num1,num2);
// modulusOfTwoNumbers(2,10)
