const Text = require('../src/Text')
const Respacer = require('../src/TextTools/Respacer')
const CaseConverter = require('../src/TextTools/CaseConverter')

describe('chaining transformations', () => {
  it('should chain', () => {
    let t = new Text(Respacer, CaseConverter)

    t.setText('helloWorld')
      .toSpace()
      .toUpper()
      .toLower()
      .toTitle()
      .toSentence()
      .toCamel()
      .toPascal()
      .toSnake()
      .toSpinal()
      .toSpace()

    expect(t.getText()).toBe('hello world')

    expect(t.getChanges().length).toBe(10);

    expect(t.getChanges()[0].operation).toBe('toSpace');
    expect(t.getChanges()[0].from).toBe('helloWorld');
    expect(t.getChanges()[0].to).toBe('hello World');

    expect(t.getChanges()[1].operation).toBe('toUpper');
    expect(t.getChanges()[1].from).toBe('hello World');
    expect(t.getChanges()[1].to).toBe('HELLO WORLD');

    expect(t.getChanges()[2].operation).toBe('toLower');
    expect(t.getChanges()[2].from).toBe('HELLO WORLD');
    expect(t.getChanges()[2].to).toBe('hello world');

    expect(t.getChanges()[3].operation).toBe('toTitle');
    expect(t.getChanges()[3].from).toBe('hello world');
    expect(t.getChanges()[3].to).toBe('Hello World');

    expect(t.getChanges()[4].operation).toBe('toSentence');
    expect(t.getChanges()[4].from).toBe('Hello World');
    expect(t.getChanges()[4].to).toBe('Hello world');

    expect(t.getChanges()[5].operation).toBe('toCamel');
    expect(t.getChanges()[5].from).toBe('Hello world');
    expect(t.getChanges()[5].to).toBe('helloWorld');

    expect(t.getChanges()[6].operation).toBe('toPascal');
    expect(t.getChanges()[6].from).toBe('helloWorld');
    expect(t.getChanges()[6].to).toBe('HelloWorld');

    expect(t.getChanges()[7].operation).toBe('toSnake');
    expect(t.getChanges()[7].from).toBe('HelloWorld');
    expect(t.getChanges()[7].to).toBe('hello_world');

    expect(t.getChanges()[8].operation).toBe('toSpinal');
    expect(t.getChanges()[8].from).toBe('hello_world');
    expect(t.getChanges()[8].to).toBe('hello-world');

    expect(t.getChanges()[9].operation).toBe('toSpace');
    expect(t.getChanges()[9].from).toBe('hello-world');
    expect(t.getChanges()[9].to).toBe('hello world');

  })
})