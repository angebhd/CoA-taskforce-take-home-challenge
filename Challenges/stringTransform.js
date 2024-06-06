function stringTransform(str) {
    const length = str.length;
    let transformedStr = '';

    if (length % 15 === 0) { // if lenght (including spaces) dividible by 3&5 or 15
        transformedStr = reverseStr(str); // reverse the string
        // getting ASCII code
        transformedStr = transformedStr.split('')
            .map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) { //if the length is divisible by
        transformedStr = reverseStr(str);
    } else if (length % 5 === 0) {
        transformedStr = str.split('')
            .map(char => char.charCodeAt(0)).join(' ');
    }

    return transformedStr;
}

function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log();
const mystr = process.argv.slice(2).join(' ');
const strTransformed = stringTransform(mystr);
if(strTransformed) console.log(strTransformed);
