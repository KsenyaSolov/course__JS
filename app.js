const money = prompt("Какая сумма денег у вас имеется?");
const age = prompt("Сколько Вам лет?");
let work = prompt("Вы работаете")

if((work === "Да") || (work === "да")) {
    work = true;
}


function creditSum(age, work) {
    if((age >= 24) & (work == true)) {
            return 500;
    } else if(age >= 24) {
            return 100;
    } else { 
        return 0;
        }
}

console.log(creditSum(24, true));

function result(money, creditSum) {
    if(money + creditSum(age, work) >= 2000) {
        return true;
    } else {
        return false;
    }
}

console.log(result(money, c))