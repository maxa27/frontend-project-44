#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { name, getName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
// eslint-disable-next-line no-undef
getName();

function NOD(randomValue1, randomValue2) {
  if (randomValue2 > randomValue1) {
    return String(NOD(randomValue2, randomValue1));
  }
  if (!randomValue2) {
    return randomValue1;
  }
  return String(NOD(randomValue2, randomValue1 % randomValue2));
}

export default function nod() {
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomValue1 = Math.floor(Math.random() * 50);
    const randomValue2 = Math.floor(Math.random() * 50);
    const checking = `${randomValue1} ${randomValue2}`;
    console.log(`Question: ${checking}`);
    const answer = readlineSync.checking('Your answer: ');

    if (answer === NOD(randomValue1, randomValue2)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${NOD(randomValue1, randomValue2)}'.
      Let's try again, ${name}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
nod();
