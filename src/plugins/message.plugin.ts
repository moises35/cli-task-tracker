import chalk from 'chalk';

export function errorMessage(message: string): void {
  console.log(chalk.red.bold(`${message}`));
}

export function successMessage(message: string): void {
  console.log(chalk.green.bold(`${message}`));
}