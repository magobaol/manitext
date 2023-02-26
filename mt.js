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
            title: text.toSpace().getText(),
            subtitle: "Normally spaced",
            uid: "spaced",
            arg: text.toSpace().getText()
        },
        {
            title: text.toUpper().getText(),
            subtitle: "UPPERCASE",
            uid: "uppercase",
            arg: text.toUpper().getText()
        },
        {
            title: text.toLower().getText(),
            subtitle: "lowercase",
            uid: "lowercase",
            arg: text.toLower().getText()
        },
        {
            title: text.toTitle().getText(),
            subtitle: "Title Case",
            uid: "titlecase",
            arg: text.toTitle().getText()
        },
        {
            title: text.toSentence().getText(),
            subtitle: "Sentence case",
            uid: "sentencecase",
            arg: text.toSentence().getText()
        },
        {
            title: text.toCamel().getText(),
            subtitle: "camelCase",
            uid: "camcelcase",
            arg: text.toCamel().getText()
        },
        {
            title: text.toPascal().getText(),
            subtitle: "PascalCase",
            uid: "pascalcase",
            arg: text.toPascal().getText()
        },
        {
            title: text.toSnake().getText(),
            subtitle: "snake_case",
            uid: "snakecase",
            arg: text.toSnake().getText()
        },
        {
            title: text.toSpinal().getText(),
            subtitle: "spinal-case",
            uid: "spinalcase",
            arg: text.toSpinal().getText()
        }
    ]
}
console.log(JSON.stringify(results))