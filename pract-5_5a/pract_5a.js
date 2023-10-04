const textSource = document.getElementById("text-source");
/**
 * innerText -- повертає весь текст, який є в середині елемента
 * innerHTML -- повертає весь html, який є в середині клкмента 
 */
const text = textSource.innerText;

// console.log('text:', text);

// const sentences = text.split('.');
// const filteredSentences = sentences.map((str) => {
//  /**
//   * .trim() -- забирає зайві пробіли на початку і на кінці
//   * .trimStart() -- забирає зайві пробіли на початку
//   * .trimEnd() -- забирає зайві пробіли на кінці
//   */
//  return str.trim();
// });

// const filteredSentences2 = filteredSentences.filter(str => str.length);


const sentences = text
 .split('.')                 // => Array<string> | string[]
 .map((str) => str.trim())   // => Array<string> | string[]
 .filter(str => str.length); // => Array<string> | string[]


const words = sentences.map(str => str.split(' ')); // Array<Array<string>> | string[][]

// console.log(words);

let index = 0;
/***
  * words = [
  *  [w1,w2,w3],
  *  [w4,w5,w6]
  * ]
  */
const result = words.map(el => {
 /**
  * el => [w1,w2,w3]
  */
 const sentence = el.map(word => {
  /**
   * word => w1
   */
  index += 1;
  if (index % 2 == 0) {
   return `<span>${word}</span>`;
  }
  return word;
 });
 /**
  * sentence => [w1, <span>w2</span>, w3]
  */
 return sentence.join(' '); // => ['s1','s2','s3'].join(' ') => 's1 s2 s3' 
}).join('. ');

console.log('result:', result);

document.getElementById('text-source').innerHTML = result;