const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };
  function convert(char) {
    let interim = "";
    let codeMorse = ""; 
    for(let a = 0; a < char.length; a+=2) {
      interim = char.slice(a,a+2);
      if (interim != "00") {
        if (interim[1] == "*") return " "; 
        else if (interim[1] == "0") {
          codeMorse += '.'; 
        }
        else codeMorse += '-'; 
      }
    }
    for(element in MORSE_TABLE) {
      if(codeMorse == element) {
         return MORSE_TABLE[element]; 
      }
    }
  }
  function slicer(string) {
    let total = []; 
    for(let b = 0; b < string.length; b+= 10) {
      total.push(string.slice(b,b+10));
    }
    return total; 
  }
  function decode(expr) {
    let parted = slicer(expr);
    return parted.map(element => convert(element)).join(""); 
  }
  module.exports = {
      decode
  }