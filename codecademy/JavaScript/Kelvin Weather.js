//开尔文参数
const kelvin = 293;
//摄氏度 转换
let celsius = kelvin - 273;
//华氏温度转换
let farenheit = Math.floor(celsius * (9 / 5) + 32);
//牛顿温度转换
let newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)