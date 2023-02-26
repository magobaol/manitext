const Respacer = require('./Respacer')

/**
 * Supported cases:
 *
 *   // UPPER CASE
 *   // lower case
 *   // Title Case
 *   // Sentence case
 *   // camelCase
 *   // PascalCase
 *   // snake_case
 *   // spinal-case
 *
 *
 */
class CaseConverter {

  static #normalize(text) {
    return this.toLower(Respacer.toSpace(text))
  }

  //UPPERCASE
  static toUpper(text) {
    return text.toUpperCase();
  }

  //lowercase
  static toLower(text) {
    return text.toLowerCase();
  }

  //Title Case
  static toTitle(text) {
    const flat = CaseConverter.#normalize(text)
    return flat.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  //Sentence case
  static toSentence(text) {
    const flat = CaseConverter.#normalize(text)
    return flat.replace(/^[a-z]{1}/g, (match) => match.toUpperCase());
  }

  //camelCase
  static toCamel(text) {
    const flat = CaseConverter.#normalize(text);
    return flat.replace(/^\w|[A-Z]|\b\w/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
  }

  //PascalCase
  static toPascal(text) {
    const flat = CaseConverter.#normalize(text);
    return flat.replace(/^\w|[A-Z]|\b\w/g, (word) => word.toUpperCase()).replace(/\s+/g, '');
  }

  //snake_case
  static toSnake(text) {
    const flat = CaseConverter.#normalize(text)
    return flat.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_').toLowerCase();
  }

  //spinal-case
  static toSpinal(text) {
    const flat = CaseConverter.#normalize(text)
    return flat.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
  }

}

module.exports = CaseConverter;