#!/usr/bin/env node
import { program } from 'commander';
import compare from './bin/compare.js';

const gendiff = () => {
  let result;
  program
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, filepath2, options) => {
      result = compare(filepath1, filepath2, options.format);
    })
    .parse();
  return result;
};

console.log(gendiff());

export default gendiff;
