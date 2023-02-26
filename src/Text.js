class Text {
  #changes = [];

  constructor(respacer, caseConverter, text) {
    this.text = text;
    this.respacer = respacer;
    this.caseConverter = caseConverter;
  }

  #stackChange(changeOp) {
    let from = this.text
    this.text = changeOp(this.text)
    this.#changes.push({
      'operation': changeOp.name,
      'from': from,
      'to': this.text
    });
  }

  //spaces
  toSpace() {
    this.#stackChange(this.respacer.toSpace)
    return this
  }

  //UPPERCASE
  toUpper() {
    this.#stackChange(this.caseConverter.toUpper)
    return this
  }

  //lowercase
  toLower() {
    this.#stackChange(this.caseConverter.toLower)
    return this
  }

  //Title Case
  toTitle() {
    this.#stackChange(this.caseConverter.toTitle)
    return this
  }

  //Sentence case
  toSentence() {
    this.#stackChange(this.caseConverter.toSentence)
    return this
  }

  //camel-case
  toCamel() {
    this.#stackChange(this.caseConverter.toCamel)
    return this
  }

  //PascalCase
  toPascal() {
    this.#stackChange(this.caseConverter.toPascal)
    return this
  }
  
  //snake_case
  toSnake() {
    this.#stackChange(this.caseConverter.toSnake)
    return this
  }

  //spinal-case
  toSpinal() {
    this.#stackChange(this.caseConverter.toSpinal)
    return this
  }

  getChanges() {
    return this.#changes;
  }

  getText() {
    return this.text
  }

}


module.exports = Text;