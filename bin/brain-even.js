#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, congratulations } from '../src/callback.js';
import { name, getName } from '../src/cli.js';

export default function isEven() {
  welcome(getName);
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`${'Question:'} ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct');
      count += 1;
    } else {
      console.log(`${'\'yes\' is wrong answer ;(. Correct answer was \'no\'. \nLet\'s try again,'} ${name}`);
      break;
    }
  }
  if (count === 3) {
    congratulations();
  }
}
isEven();
