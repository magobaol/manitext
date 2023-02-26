class Text {
  #changes = [];

  constructor(respacer, caseConverter) {
    this.text = '';
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

  #resetChanges() {
    this.#changes = [];
  }

  setText(text) {
    this.text = text
    this.#resetChanges();
    return this;
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

  getLastOperation() {
    return this.#changes[this.#changes.length-1];
  }

  getAlfredItem() {
    let lastOp = this.getLastOperation()
    let subtitle = ''
    let uid = ''
    switch (lastOp.operation) {
      case 'toSpace':
        subtitle = 'Normally spaced'
        uid = 'spaced'
        break
      case 'toUpper':
        subtitle = 'UPPER CASE'
        uid = 'uppercase'
        break
      case 'toLower':
        subtitle = 'lower case'
        uid = 'lowercase'
        break
      case 'toTitle':
        subtitle = 'Title Case'
        uid = 'titlecase'
        break
      case 'toSentence':
        subtitle = 'Sentence case'
        uid = 'sentencecase'
        break
      case 'toCamel':
        subtitle = 'camelCase'
        uid = 'camelcase'
        break
      case 'toPascal':
        subtitle = 'PascalCase'
        uid = 'pascalcase'
        break
      case 'toSnake':
        subtitle = 'snake_case'
        uid = 'snakecase'
        break
      case 'toSpinal':
        subtitle = 'spinal-case'
        uid = 'spinalcase'
        break
    }
    return {
      title: lastOp.to,
      arg: lastOp.to,
      uid: uid,
      subtitle: subtitle
    }

  }

}


module.exports = Text;