import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-mutable-exports
export let name = '';
export const getName = () => {
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};
