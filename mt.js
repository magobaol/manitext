#!/usr/bin/env node
'use strict';

const Text = require('./src/Text');
const Respacer = require('./src/TextTools/Respacer')
const CaseConverter = require('./src/TextTools/CaseConverter')

const { Command, Option } = require('commander');
const program = new Command();

program
  .name('manitext')
  .version('1.0.0')
  .description('Manipulate text in input')
  .argument('<string>', 'Text to manipulate')
  .addOption(
    new Option('-cc, --convert-case <string>', 'Convert case').choices(['space', 'upper', 'lower', 'title', 'sentence', 'camel', 'pascal', 'snake', 'spinal'])
  )

program.parse();

const options = program.opts();

let text = new Text(Respacer, CaseConverter, program.args[0]);
let results = {}
if (options.convertCase) {
  let item = '';
  switch (options.convertCase) {
    case 'space':
      item = text.setText(program.args[0]).toSpace().getText()
      break;
    case 'upper':
      item = text.setText(program.args[0]).toUpper().getText()
      break;
    case 'lower':
      item = text.setText(program.args[0]).toLower().getText()
      break;
    case 'title':
      item = text.setText(program.args[0]).toTitle().getText()
      break;
    case 'sentence':
      item = text.setText(program.args[0]).toSentence().getText()
      break;
    case 'camel':
      item = text.setText(program.args[0]).toCamel().getText()
      break;
    case 'pascal':
      item = text.setText(program.args[0]).toPascal().getText()
      break;
    case 'snake':
      item = text.setText(program.args[0]).toSnake().getText()
      break;
    case 'spinal':
      item = text.setText(program.args[0]).toSpinal().getText()
      break;
  }
  process.stdout.write(item)
} else {
  results = {
    items: [
      text.setText(program.args[0]).toSpace().getAlfredItem(),
      text.setText(program.args[0]).toUpper().getAlfredItem(),
      text.setText(program.args[0]).toLower().getAlfredItem(),
      text.setText(program.args[0]).toTitle().getAlfredItem(),
      text.setText(program.args[0]).toSentence().getAlfredItem(),
      text.setText(program.args[0]).toCamel().getAlfredItem(),
      text.setText(program.args[0]).toPascal().getAlfredItem(),
      text.setText(program.args[0]).toSnake().getAlfredItem(),
      text.setText(program.args[0]).toSpinal().getAlfredItem(),
    ]
  }
  process.stdout.write(JSON.stringify(results))
}
