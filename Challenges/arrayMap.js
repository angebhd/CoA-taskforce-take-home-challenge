function getSubArray(arr, target) {
    let sum = 0;
    let startIndex = 0;

    for (let currIndex = 0; currIndex < arr.length; currIndex++) {
        sum += arr[currIndex];
        while (sum > target) {
            sum -= arr[startIndex];
            startIndex++;
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
}

const args = process.argv.slice(2);
const arr = args.slice(0, args.length - 1).map(Number);
const target = Number(args[args.length - 1]);

console.log(getSubArray(arr, target));