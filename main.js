const Name = prompt("Введите ваше имя:");
const surname = prompt("Введите вашу фамилию:");
const age = prompt("Введите ваш возраст:");

document.getElementById("name").textContent = `Имя: ${Name}`;
document.getElementById("surname").textContent = `Фамилия: ${surname}`;
document.getElementById("age").textContent = `Возраст: ${age}`;