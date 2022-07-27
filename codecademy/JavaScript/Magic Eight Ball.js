let userName = 'Gabriel';
const userQuestion = 'Will I get desert twice?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// 如果用户输入了一个名字，赋值到userName，否则打印hello
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// 将用户提出的问题打印到控制台中
console.log(`${userName} asked: ${userQuestion}`);

// 创建条件语句，根据随机数生成的数字分配给eightBall。
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`);
}

// 打印输出内容
console.log(`Magic Eightball: ${eightBall}`);