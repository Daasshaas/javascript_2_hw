let temperatureCelsius = 25; 
let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

console.log(`${temperatureCelsius} по Цельсію = ${temperatureFahrenheit} по Фаренгейту`);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;

console.log(`У місяці з ${daysInMonth} днями:`);
console.log(`Годин: ${hoursInMonth}`);
console.log(`Хвилин: ${minutesInMonth}`);

let playerHealth = 100;
let playerEnergy = 75;
let healthLoss = 20;
let energyLoss = 15;

playerHealth -= healthLoss;
playerEnergy -= energyLoss;
console.log(`Поточний рівень здоров'я гравця: ${playerHealth}`);
console.log(`Поточний рівень енергії гравця: ${playerEnergy}`);

let total = 100;
let discount = 0.10;
let discounted = total * (1 - discount);

console.log(`Початкова сума покупки: ${total}`);
console.log(`Сума зі знижкою 10%: ${discounted}`);

let floatNumber = 26.32;
let number = Math.floor(floatNumber);

console.log(`початкове число ${floatNumber}`);
console.log(`округлене число ${number}`);

let numberString = "67.85";
let roundedNumber = parseFloat(numberString);

console.log(`початковий рядок "${numberString}"`);
console.log(`перетворене число ${roundedNumber}`);

let integerString = "546";
let integerNumber = parseInt(integerString);

console.log(`початковий рядок "${integerString}"`);
console.log(`перетворене ціле число ${integerNumber}`);

let myNumber = 36;
let squareRoot = Math.sqrt(myNumber);

console.log(`число ${myNumber}`);
console.log(`квадратний корінь ${squareRoot}`);

let integerNumber2 = 45;
let numberString2 = "123";
let parsedNumber = parseInt(numberString2);
let stringifiedNumber = integerNumber2.toString();

console.log(`рядок "${numberString2}" перетворено на ціле число ${parsedNumber}`);
console.log(`ціле число ${integerNumber2} перетворено на рядок "${stringifiedNumber}"`);