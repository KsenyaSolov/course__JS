//Первое решение

/*const salary = 80;
const workTime = 5;
const workDays = 11 - 11 / 7;
console.log(40 <= workTime * workDays) 
console.log(salary * 40)
*/


//Второе решение

/*const salary = 80;
const workTime = 5 * 5;
const timeHours = 40;
console.log(11 / 7 * 40 >= timeHours / workTime)
console.log(timeHours * salary)
*/


//Решение после разбора

const payRate = 80;
const projectTime = 40;
const freeTime = 5 * 9; 
console.log("Могу ли взяться за работу? " + (projectTime <= freeTime));
console.log("Работа будет стоить: " + (payRate * projectTime) + "$")
