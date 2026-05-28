type CaseConverter = (text: string) => string;

export const toUpper: CaseConverter = (text) => { return text.toUpperCase() }
export const toLower: CaseConverter = (text) => { return text.toLowerCase() }
export const toTitle: CaseConverter = (text) => {

}

type UrlEncoderDecoder = (text: string) => string;
export const decodeUrl: UrlEncoderDecoder = (text) => {
  return text
}

type Filter = (text: string) => string;
function apply(text: string, aaa: Filter)