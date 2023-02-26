const respacer = require('../../src/TextTools/Respacer');

describe('Respacer', () => {
  describe('#toSpace', function () {

    test('lower -> spaces (no change)', () => {
      expect(respacer.toSpace('hello world')).toBe('hello world')
    })

    test('UPPER -> spaces (no change)', () => {
      expect(respacer.toSpace('HELLO WORLD')).toBe('HELLO WORLD')
    })

    test('MixEd -> spaces (no change)', () => {
      expect(respacer.toSpace('HeLlO WoRlD')).toBe('HeLlO WoRlD')
    })

    test('Title Case -> spaces (no change)', () => {
      expect(respacer.toSpace('Hello World')).toBe('Hello World')
    })

    test('Sentence case -> spaces (no change)', () => {
      expect(respacer.toSpace('Hello world')).toBe('Hello world')
    })

    test('camelCase -> spaces', () => {
      expect(respacer.toSpace('helloWorld')).toBe('hello World')
    })

    test('PascalCase -> spaces', () => {
      expect(respacer.toSpace('HelloWorld')).toBe('Hello World')
    })

    test('snake_case -> spaces', () => {
      expect(respacer.toSpace('hello_world')).toBe('hello world')
    })

    test('spinal-case -> spaces', () => {
      expect(respacer.toSpace('hello-world')).toBe('hello world')
    })

  });
})