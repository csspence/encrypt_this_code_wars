/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = (text) => {
  if(text.length === 1) {
    return text.charCodeAt().toString();
  }
  let strArr = text.split(' ');
  let newArr = [];

  const innerFunc = (str) => {
    let newStr = '';
    if(str.length === 1) {
      return str.charCodeAt(0).toString();
    }
    for(let h = 0; h < str.length; h++) {
      if(h = 0) {
        newStr = newStr + str[0].charCodeAt();
      } else if(h = 1) {
        newStr = newStr + str[str.length - 1];
      } else if(h = str.length - 1) {
        newStr = newStr + str[1];
      } else {
        newStr = newStr + str[h];
      }
    }
    return newStr;
  }

  for(let i = 0; i < strArr.length; i++) {
     newArr.push(innerFunc(strArr[i]));
  }

  return newArr.join();
}