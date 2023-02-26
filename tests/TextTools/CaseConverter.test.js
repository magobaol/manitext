const CC = require('../../src/TextTools/CaseConverter')

describe('CaseConverter', () => {

  describe('#toUpper', function () {
    test('AnYtHIng -> UPPER CASE', () => {
      expect(CC.toUpper('HEllo WorlD')).toBe('HELLO WORLD');
    });
  })

  describe('#toLower', () => {
    test('AnYtHIng -> lower case', () => {
      expect(CC.toLower('HEllo WorlD')).toBe('hello world');
    });
  })

  describe('#toTitle', () => {
    test('spaces -> Title Case', () => {
      expect(CC.toTitle('hello world')).toBe('Hello World');
    });

    test('UPPER CASE -> Title Case', () => {
      expect(CC.toTitle('HELLO WORLD')).toBe('Hello World');
    })

    test('lower case -> Title Case', () => {
      expect(CC.toTitle('hello world')).toBe('Hello World');
    })

    test('Title Case -> Title Case', () => {
      expect(CC.toTitle('Hello World')).toBe('Hello World');
    })

    test('Sentence case -> Title Case', () => {
      expect(CC.toTitle('Hello world')).toBe('Hello World');
    });

    test('camelCase -> Title Case', () => {
      expect(CC.toTitle('helloWorld')).toBe('Hello World');
    });

    test('PascalCase -> Title Case', () => {
      expect(CC.toTitle('HelloWorld')).toBe('Hello World');
    });

    test('snake_case -> Title Case', () => {
      expect(CC.toTitle('Hello_World')).toBe('Hello World');
    });

    test('spinal-case -> Title Case', () => {
      expect(CC.toTitle('Hello-World')).toBe('Hello World');
    });
  })

  describe('#toSentence', () => {
    test('UPPER CASE -> Sentence case', () => {
      expect(CC.toSentence('HELLO WORLD')).toBe('Hello world');
    });

    test('lower case -> Sentence case', () => {
      expect(CC.toSentence('hello world')).toBe('Hello world');
    });

    test('Title Case -> Sentence case', () => {
      expect(CC.toSentence('Hello World')).toBe('Hello world');
    });

    test('Sentence Case -> Sentence case', () => {
      expect(CC.toSentence('Hello world')).toBe('Hello world');
    });

    test('camelCase -> Sentence case', () => {
      expect(CC.toSentence('helloWorld')).toBe('Hello world');
    });

    test('PascalCase -> Sentence case', () => {
      expect(CC.toSentence('HelloWorld')).toBe('Hello world');
    });

    test('snake_case -> Sentence case', () => {
      expect(CC.toSentence('Hello_World')).toBe('Hello world');
    });

    test('spinal-case -> Sentence case', () => {
      expect(CC.toSentence('Hello-World')).toBe('Hello world');
    });

  })

  describe('#toCamel', () => {
    test('UPPER CASE -> camelCase', () => {
      expect(CC.toCamel('HELLO WORLD')).toBe('helloWorld');
    });

    test('lower case -> camelCase', () => {
      expect(CC.toCamel('hello world')).toBe('helloWorld');
    });

    test('Title Case -> camelCase', () => {
      expect(CC.toCamel('Hello World')).toBe('helloWorld');
    });

    test('Sentence Case -> camelCase', () => {
      expect(CC.toCamel('Hello world')).toBe('helloWorld');
    });

    test('camelCase -> camelCase', () => {
      expect(CC.toCamel('helloWorld')).toBe('helloWorld');
    });

    test('PascalCase -> camelCase', () => {
      expect(CC.toCamel('HelloWorld')).toBe('helloWorld');
    });

    test('snake_case -> camelCase', () => {
      expect(CC.toCamel('Hello_World')).toBe('helloWorld');
    });

    test('spinal-case -> camelCase', () => {
      expect(CC.toCamel('Hello-World')).toBe('helloWorld');
    });

  })

  describe('#toPascal', () => {
    test('UPPER CASE -> PascalCase', () => {
      expect(CC.toPascal('HELLO WORLD')).toBe('HelloWorld');
    });

    test('lower case -> PascalCase', () => {
      expect(CC.toPascal('hello world')).toBe('HelloWorld');
    });

    test('Title Case -> PascalCase', () => {
      expect(CC.toPascal('Hello World')).toBe('HelloWorld');
    });

    test('Sentence Case -> PascalCase', () => {
      expect(CC.toPascal('Hello world')).toBe('HelloWorld');
    });

    test('camelCase -> PascalCase', () => {
      expect(CC.toPascal('helloWorld')).toBe('HelloWorld');
    });

    test('PascalCase -> PascalCase', () => {
      expect(CC.toPascal('HelloWorld')).toBe('HelloWorld');
    });

    test('snake_case -> PascalCase', () => {
      expect(CC.toPascal('Hello_World')).toBe('HelloWorld');
    });

    test('spinal-case -> PascalCase', () => {
      expect(CC.toPascal('Hello-World')).toBe('HelloWorld');
    });

  })

  describe('#toSnake', () => {
    test('UPPER CASE -> snake_case', () => {
      expect(CC.toSnake('HELLO WORLD')).toBe('hello_world');
    });

    test('lower case -> snake_case', () => {
      expect(CC.toSnake('hello world')).toBe('hello_world');
    });

    test('Title Case -> snake_case', () => {
      expect(CC.toSnake('Hello World')).toBe('hello_world');
    });

    test('Sentence Case -> snake_case', () => {
      expect(CC.toSnake('Hello world')).toBe('hello_world');
    });

    test('camelCase -> snake_case', () => {
      expect(CC.toSnake('helloWorld')).toBe('hello_world');
    });

    test('PascalCase -> snake_case', () => {
      expect(CC.toSnake('HelloWorld')).toBe('hello_world');
    });

    test('snake_case -> snake_case', () => {
      expect(CC.toSnake('Hello_World')).toBe('hello_world');
    });

    test('spinal-case -> snake_case', () => {
      expect(CC.toSnake('Hello-World')).toBe('hello_world');
    });

  })

  describe('#toSpinal', () => {
    test('UPPER CASE -> spinal-case', () => {
      expect(CC.toSpinal('HELLO WORLD')).toBe('hello-world');
    });

    test('lower case -> spinal-case', () => {
      expect(CC.toSpinal('hello world')).toBe('hello-world');
    });

    test('Title Case -> spinal-case', () => {
      expect(CC.toSpinal('Hello World')).toBe('hello-world');
    });

    test('Sentence Case -> spinal-case', () => {
      expect(CC.toSpinal('Hello world')).toBe('hello-world');
    });

    test('camelCase -> spinal-case', () => {
      expect(CC.toSpinal('helloWorld')).toBe('hello-world');
    });

    test('PascalCase -> spinal-case', () => {
      expect(CC.toSpinal('HelloWorld')).toBe('hello-world');
    });

    test('snake_case -> spinal-case', () => {
      expect(CC.toSpinal('Hello_World')).toBe('hello-world');
    });

    test('spinal-case -> spinal-case', () => {
      expect(CC.toSpinal('Hello-World')).toBe('hello-world');
    });

  })
})