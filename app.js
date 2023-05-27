function calculateCreditSum(age, work) {
    if (age > 24 && work === true){
        return 500;
    }
    else if(age > 24 && work === false) {
        return 100;
    }
    else {
        return 0;
    }
}

function isEnoughMoney(money, age, work) {
    const creditSum = calculateCreditSum(age, work)
    if((money + creditSum) >= 2000) {
        return true;
    }
    return false;
}



console.log(isEnoughMoney(1500, 25, true))

