const role = "admin";

switch (role) {
    case "manager":
        console.log("Менеджер");
        break;
    case "admin":
        console.log("Администратор");
        break;
    case "worker":
        console.log("Работник");
        break;
    default:
        console.log("Доступ запрещен")
        break;
}
