// Function to transform the input string based on its length

function stringTransform(str) {
    const length = str.length;
    let transformedStr = '';

    if (length % 15 === 0) {
        transformedStr = reverseStr(str);// Reverse the string
        // Convert each character to its ASCII code and join them with spaces :
        transformedStr = transformedStr.split('')
            .map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        transformedStr = reverseStr(str);
    } else if (length % 5 === 0) {
        transformedStr = str.split('')
            .map(char => char.charCodeAt(0)).join(' ');
    }

    return transformedStr;
}

// Function to reverse the input string
function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log();
const mystr = process.argv.slice(2).join(' ');
const strTransformed = stringTransform(mystr);
if (strTransformed) console.log(strTransformed);

// There's a detailed explanation of this code on the readMe file