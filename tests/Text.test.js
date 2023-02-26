const Text = require('../src/Text');
const Respacer = require('../src/TextTools/Respacer')
const CaseConverter = require('../src/TextTools/CaseConverter')
jest.mock('../src/TextTools/Respacer');
jest.mock('../src/TextTools/CaseConverter');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Respacer.mockClear();
});

describe('Text', () => {

  describe('setText', () => {
    it('should set the text to work on', () => {
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello');
      expect(t.getText()).toBe('hello')
    })

    it('should reset changes', () => {
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello').toUpper();
      expect(t.getChanges().length).toBe(1)

      t.setText('world');
      expect(t.getChanges().length).toBe(0)
    })
  })

  describe('#toSpace', () => {
    it('should respace a text', () => {
      Respacer.toSpace = jest.fn().mockReturnValue('hello world')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toSpace();
      expect(Respacer.toSpace.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('hello world');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('hello world');
    })
  })

  describe('#toUpper', () => {
    it('should UPPER a text', () => {
      CaseConverter.toUpper = jest.fn().mockReturnValue('HELLO WORLD')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toUpper();
      expect(CaseConverter.toUpper.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('HELLO WORLD');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('HELLO WORLD');
    })
  })

  describe('#toLower', () => {
    it('should lower a text', () => {
      CaseConverter.toLower = jest.fn().mockReturnValue('hello world')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toLower();

      expect(CaseConverter.toLower.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('hello world');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('hello world');
    })
  })

  describe('#toTitle', () => {
    it('should Title Case a text', () => {
      CaseConverter.toTitle = jest.fn().mockReturnValue('Hello World')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toTitle();

      expect(CaseConverter.toTitle.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('Hello World');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('Hello World');
    })
  })

  describe('#toSentence', () => {
    it('should Sentence case a text', () => {
      CaseConverter.toSentence = jest.fn().mockReturnValue('Hello world')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toSentence();

      expect(CaseConverter.toSentence.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('Hello world');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('Hello world');
    })
  })

  describe('#toCamel', () => {
    it('should camelCase a text', () => {
      CaseConverter.toCamel = jest.fn().mockReturnValue('helloWorld')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toCamel();

      expect(CaseConverter.toCamel.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('helloWorld');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('helloWorld');
    })
  })

  describe('#toPascal', () => {
    it('should PascalCase a text', () => {
      CaseConverter.toPascal = jest.fn().mockReturnValue('HelloWorld')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toPascal();

      expect(CaseConverter.toPascal.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('HelloWorld');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('HelloWorld');
    })
  })

  describe('#toSnake', () => {
    it('should snake_case a text', () => {
      CaseConverter.toSnake = jest.fn().mockReturnValue('hello_world')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello-world').toSnake();

      expect(CaseConverter.toSnake.mock.calls[0][0]).toBe('hello-world')
      expect(t.getText()).toBe('hello_world');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello-world');
      expect(t.getChanges()[0].to).toBe('hello_world');
    })
  })

  describe('#toSpinal', () => {
    it('should spinal-case a text', () => {
      CaseConverter.toSpinal = jest.fn().mockReturnValue('hello-world')
      let t = new Text(Respacer, CaseConverter)

      t.setText('hello world').toSpinal();

      expect(CaseConverter.toSpinal.mock.calls[0][0]).toBe('hello world')
      expect(t.getText()).toBe('hello-world');
      expect(t.getChanges().length).toBe(1);
      expect(t.getChanges()[0].operation).toBe('mockConstructor');
      expect(t.getChanges()[0].from).toBe('hello world');
      expect(t.getChanges()[0].to).toBe('hello-world');
    })
  })
  
});