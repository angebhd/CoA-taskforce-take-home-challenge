function getSubArray(arr, target) {
    let sum = 0;
    const sumMap = new Map();

    // Initialize with sum 0 at index -1 to handle the case when subarray starts from index 0 //
    sumMap.set(0, -1);

    for (let currIndex = 0; currIndex < arr.length; currIndex++) {
        sum += arr[currIndex];

        // Check if there exists a subarray with the target sum :
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
/* Extract the array elements from arguments 
(excluding the last one which is the target):  */
const arr = args.slice(0, args.length - 1).map(Number);
// Exctract the target, which is the last element: 
const target = Number(args[args.length - 1]);
// Call the function and log the result :
console.log(getSubArray(arr, target));

// There's a detailed explanation of this code on the readMe file