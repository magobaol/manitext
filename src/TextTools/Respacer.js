class Respacer {
  static toSpace(text) {

    //If there is any space - NO CHANGE
    if (text.search(/\s/g) !== -1) {
      return text
    }

    //If there is any dashes - REPLACE DASHES WITH SPACES
    if (text.search(/-/g) !== -1) {
      return text.replace(/-/g, ' ')
    }

    //If there is any underscores - REPLACE UNDERSCORES WITH SPACES
    if (text.search(/_/g) !== -1) {
      return text.replace(/_/g, ' ')
    }

    //If there is any capital letter – REPLACE ANY CAPITAL LETTER (BUT THE FIRST ONE) WITH THE SAME LETTER PRECEDED BY A SPACE
    if (text.search(/(?<!\s|^)([A-Z])/g) !== -1) {
      return text.replace(/(?<!\s|^)([A-Z])/g, ' $1')
    }

    //If none of the above applies – NO CHANGE
    return text
  }
}

module.exports = Respacer;