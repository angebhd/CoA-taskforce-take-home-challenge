function getSubArray(arr, target) {
    let sum = 0;

    const sumMap = new Map();
    sumMap.set(0, -1);

    for (let currIndex = 0; currIndex < arr.length; currIndex++) {
        sum += arr[currIndex];
        
        if (sumMap.has(sum - target)) {
            return true;
          }

        if (!sumMap.has(sum)) {
            sumMap.set(sum, currIndex);
          }
        }


    return false;
}

const args = process.argv.slice(2);
const arr = args.slice(0, args.length - 1).map(Number);
console.log(arr);
const target = Number(args[args.length - 1]);
console.log(target);


console.log(getSubArray(arr, target));