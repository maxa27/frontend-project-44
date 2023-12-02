#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { welcome, congratulations } from '../src/callback.js';
import { name, getName } from '../src/cli.js';

function isPrime(randomNumber) {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return false;
  }
  return randomNumber !== 1;
}

export default function isPrimeNum() {
  welcome();
  let countSuccess = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      countSuccess += 1;
    } else {
      return;
    }
    if (countSuccess === 3) {
      congratulations();
    }
  }
}
isPrimeNum();
