#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { welcome, congratulations } from '../src/callback.js';
import { name, getName } from '../src/cli.js';

// eslint-disable-next-line consistent-return
export default function calculator() {
  welcome();
  console.log('What is the result of the expression?');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 20);
    const index = Math.floor(Math.random() * 3);
    const Array = ['+', '-', '*'];
    const plus = randomNumber1 + randomNumber2;
    const minus = randomNumber1 - randomNumber2;
    const mupltiply = randomNumber1 * randomNumber2;
    const check = `${randomNumber1} ${Array[index]} ${randomNumber2}`;

    console.log(`Question: ${check}`);
    const answer = readlineSync.question('Your answer: ');

    if (Array[index] === '+' && Number(answer) === plus) {
      console.log('Correct!');
      count += 1;
    }

    if (Array[index] === '-' && Number(answer) === minus) {
      console.log('Correct!');
      count += 1;
    }

    if (Array[index] === '*' && Number(answer) === mupltiply) {
      console.log('Correct!');
      count += 1;
    } else if (Array[index] === '+' && Number(answer) !== plus) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(plus)}'.
      Let's try again, ${name}!`);
    } else if (Array[index] === '-' && Number(answer) !== minus) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(minus)}'.
        Let's try again, ${name}!`);
    } else if (Array[index] === '*' && Number(answer) !== mupltiply) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(mupltiply)}'.
          Let's try again, ${name}!`);
    }
  }
  if (count === 3) {
    congratulations();
  }
}
calculator();
