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
  let strArr = text.split(' ');
  console.log('here is strArr before loop: ' + strArr);
  for(let i = 0; i < strArr.length; i++) {
    strArr[i][0] = strArr[i][0].charCodeAt();
    let placeHolder = strArr[i][1];
    strArr[i][1] = strArr[i][strArr[i].length - 1];
    strArr[i][strArr[i].length - 1] = placeHolder;
  }
  console.log('here is strArr after loop: ' + strArr);
  return strArr.join();
}