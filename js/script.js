//Мінімум-1
let a = 0.1;
let b = 0.2;
let c = a + b;
let sumUp = alert(("1)" + c));

//Мінімум-2
let e = "1";
let num = Number(e);
let d = 2;
let sum = num + d;
let logicSum = alert("2)" + sum);

//Мінімум-3
const mb = 0.82;
let gb = prompt("Укажите кол-во GB на вашей флешке");
let result = gb / mb;
let finist = alert("Если вес файла 820 мб, то на вашей флешке помещается такое кол-во файл(ов) - " + " " + parseInt(result));

//Норма-1
let money = prompt("Укажите сумму денег, которая у Вас имеется, а если не имеется, то уходите");
const CHOCKO = 18.75;
let calc = alert("Вы можете купить:" + " " + parseInt(money/CHOCKO) + " " + "шоколад(ок/ку)" + " " + "," + "и Ваша сдача: " + money%CHOCKO + " " + "гривен")

//Норма-a
let n = prompt("Укажите число, чтобы мы могли его перевернуть");
function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
let resultReverse = alert (reverse_a_number(n));

//Максимум-1
//Не знаю, как решить. Эти задачи на логику не для меня(((

//Максимум-2
// let secondTask = alert(){
//     alert(2 && 0 && 3);
//     alert(2 || 0 || 3);
//     alert(2 && 0 || 3);
// }
