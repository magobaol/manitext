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
        new Option('-cc, --convert-case <string>', 'Convert case').choices(['upper', 'lower'])
    )
    
program.parse();

const options = program.opts();

let text = new Text(Respacer, CaseConverter, program.args[0]);

const results = {
    items: [
        {
            title: text.setText(program.args[0]).toSpace().getText(),
            subtitle: "Normally spaced",
            uid: "spaced",
            arg: text.setText(program.args[0]).toSpace().getText()
        },
        {
            title: text.setText(program.args[0]).toUpper().getText(),
            subtitle: "UPPERCASE",
            uid: "uppercase",
            arg: text.setText(program.args[0]).toUpper().getText()
        },
        {
            title: text.setText(program.args[0]).toLower().getText(),
            subtitle: "lowercase",
            uid: "lowercase",
            arg: text.setText(program.args[0]).toLower().getText()
        },
        {
            title: text.setText(program.args[0]).toTitle().getText(),
            subtitle: "Title Case",
            uid: "titlecase",
            arg: text.setText(program.args[0]).toTitle().getText()
        },
        {
            title: text.setText(program.args[0]).toSentence().getText(),
            subtitle: "Sentence case",
            uid: "sentencecase",
            arg: text.setText(program.args[0]).toSentence().getText()
        },
        {
            title: text.setText(program.args[0]).toCamel().getText(),
            subtitle: "camelCase",
            uid: "camcelcase",
            arg: text.setText(program.args[0]).toCamel().getText()
        },
        {
            title: text.setText(program.args[0]).toPascal().getText(),
            subtitle: "PascalCase",
            uid: "pascalcase",
            arg: text.setText(program.args[0]).toPascal().getText()
        },
        {
            title: text.setText(program.args[0]).toSnake().getText(),
            subtitle: "snake_case",
            uid: "snakecase",
            arg: text.setText(program.args[0]).toSnake().getText()
        },
        {
            title: text.setText(program.args[0]).toSpinal().getText(),
            subtitle: "spinal-case",
            uid: "spinalcase",
            arg: text.setText(program.args[0]).toSpinal().getText()
        }
    ]
}
console.log(JSON.stringify(results))