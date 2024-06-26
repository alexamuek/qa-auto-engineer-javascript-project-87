#!/usr/bin/env node
import compare from './compare.js';
import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(compare(filepath1, filepath2));
  })
  .parse(process.argv);
