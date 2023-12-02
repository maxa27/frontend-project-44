#!/usr/bin/env node
import { name, getName } from './cli.js';

export function welcome() {
  console.log('Welcome to the Brain Games!');
  getName(name);
}

export function congratulations() {
  console.log(`Congratulations, ${name}!`);
}
