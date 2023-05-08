const problem = prompt("Сколько будет 7 + 15?");
switch (problem) {
    case "22":
    case "Я не робот":
        console.log("Успех");
        break;
    default: 
        console.log("Вы робот!");
}