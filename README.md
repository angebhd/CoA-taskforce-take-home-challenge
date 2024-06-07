# CoA Taskforce: Coding challenge



  Table of contents
- [Presentation](#i-presentation)
- [Setup and Run the Project](#ii-setup-and-run-the-project)
  - [Requirements](#1-requirements)
  - [Download the Resources](#2-download-the-resources)
  - [Run the Project](#3-run-the-project)
- [Approach Used](#iii-approach-used)
  - [Interactive Photo Gallery](#1-interactive-photo-gallery)
  - [Array Manipulation](#2-array-manipulation)
  - [String Transformation](#3-string-transformation)



# I. Presentation
This repository contains the solution of the coding challenge.
The coding challenge is made of three tasks
1. UI challenge: Interactive Photo Galerry
    - Implement an interactive photo gallery based on the provided Figma designs
    - The gallery should be responsive and work seamlessly on both desktop and mobile devices
    - Implement features such as image thumbnail navigation, full-size image viewing, and any interactions specified in the designs.
2. Coding challenge 1: Array Manipulation
    - Problem statements:
        - Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false
    - Example
        - Input: arr = [4, 2, 7, 1, 9, 5], target = 17
        - Output: true
        - Explanation The subarray [7, 1, 9] sums up to 17, which is equal to the target
    - Constraints:
        - The array will contain between 1 and 100,000 elements.
        - The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.
    - Expected complexity time O(n), where n is the length of the string
    - Expected complexity space O(1)
3. Codding challenge 2: String Transformation
    - Problem statements:
        - GGiven a string, transform it based on the following rules:
            - If the length of the string is divisible by 3, reverse the entire string
            - If the length of the string is divisible by 5, replace each character with its ASCII code
            - If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above
    - Example
        - Input: "Hamburger"
        - Output: "regrubmaH"
        - Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH"
    - Example
        - Input: "Pizza"
        - Output: "80 105 122 122 97"
        - Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97"
    - Example
        - Input: "Chocolate Chip Cookie"
        - Output: "eikooCpihCetalocohC"
        - Explanation: The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".
    - Constraints:
        - The string will only contain alphanumeric characters and spaces.
        - The length of the string will be between 1 and 1000.
    - Expected complexity time O(n), where n is the length of the string
    - Expected complexity space O(n), where n is the length of the string
    - Note: You can assume that the input will always be valid and within the specified constraints. Your solution should handle all possible cases and return the transformed string accordingly


# II. Setup and run the project
## 1. Requirements
- Internet connection
- nodejs
- Any web browser
- Git (Optionnal)
## 2. Download the ressources
- **With Git** :
    1. Open your terminal
    2. Run this commands
```sh
git clone https://github.com/angebhd/CoA-taskforce-take-home-challenge.git
cd  CoA-taskforce-take-home-challenge
```
- **Without Git**:
  1. Open [this link](https://github.com/angebhd/CoA-taskforce-take-home-challenge) in your favorite browser.
  2. Download the project.
  3. Extract the files.
  4. Open the  `CoA-taskforce-take-home-challenge`. folder
## 3. Run the project
1. **Interactive Photo Galerry** : just open `index.html` with your favourite web browser
2. **Array manipulation**: execute this command
```javascript
node arrayMap.js <array elements> <target sum>
```
- Example: 
```javascript
node arrayMap.js 4 6 3 7 3 7 2 10
```
- Note: The last number is considered as the targeted sum
3. **String Transformation** : execute this command
``` javascript
node stringTransform.js "Your text"
```
- Example: 
```javascript
node stringTransform.js Chocolate Chip Cookie
```
- Note: The quotes are optional


# III. Approch used
## 1. Interactive Photo Galerry
Plain HTML/CSS/JS was used to create this UI.

1. HTML Architecture
    - Gallery structured with `div` elements (class `img`) for each image
    - Each `div` contains a thumbnail `img`, overlay `div`, and info `div`
    - `data-full` attribute stores path to full-size image
2. CSS Styling
    - Basic styling to center gallery and layout
    - Hover effects to blur, grayscale image and show overlay
    - `.view-ful`l class styled for modal full-screen viewer
3. JS interactivity
    - Event listeners on each `.img` for mouseover, mouseout, click
    - On mouseover, additional text (Know more →) is dynamically created and displayed with a smooth transition
    - On mouseout, the additional text is hidden and removed after the transition ends.
    - On click, the full-size image is displayed in a modal viewer. Clicking the close button hides the modal
#### This approach ensures a responsive, interactive, and visually appealing photo gallery that enhances the user experience by providing smooth animations and clear visual feedback on interactions.

## 2. Array manipulation
#### To solve this problem, I use a technique called the Sliding Window Technique combined with a Hash Map (or Map in JavaScript) to keep track of the running sum at each index
- Here's a step-by-step explanation of the approach:
    1. Initialize variables: I start by initializing a `sum` variable to keep track of the running sum, and a Map called `sumMap`. I also set an initial entry in the sumMap with `sumMap.set(0, -1)`. This step is crucial for handling the case where the target sum is 0, and the array contains a subarray with all zeros.
    2. Iterate through the array: We iterate through the array using a for loop with an index `currIndex`
    3. Update running sum: At each index currIndex, we update the sum by adding the current element arr[currIndex] to it.
    4. Check for the target sum: After updating the sum, we check if sum - target exists in the sumMap. If it does, it means that there exists a subarray from the index stored in sumMap[sum - target] + 1 to the current index currIndex that sums up to target. In this case, we return true
    5. Update the sumMap: If sum - target doesn't exist in the sumMap, we check if the current sum exists in the sumMap. If it doesn't, we add an entry sumMap.set(sum, currIndex). This step is crucial for handling negative target sums, as it ensures that we don't overwrite existing entries in the sumMap
    6. Return false if no subarray found: If we reach the end of the loop without finding a subarray that sums up to target, we return false
- Time and Space Complexity
    - Time Complexity: The algorithm iterates through the array once, so the time complexity is O(n), where n is the length of the array
    - Space Complexity: The algorithm uses a Map to store the running sums and their indices. In the worst case, we may need to store all the running sums, so the space complexity is O(n), where n is the length of the input array.

- Edge cases:
    - Negative numbers: The solution works correctly for arrays containing negative numbers.
    - Zero target sum: The solution handles the case where the target sum is 0, and the array contains a subarray with all zeros
    - Negative target sums: The solution works correctly for negative target sums.

## 3. String Transformation
#### The approach used to solve this challenge is a combination of string manipulation techniques and modular arithmetic. 
- Here's a breakdown of the approach
    1. Determining the Transformation:
        - The first step is to determine the transformation to be applied based on the length of the input string
        - This is done by checking if the length of the string is divisible by 15, 3, or 5 using the modulus operator `%`
        - If the length is divisible by 15, both the reverse and ASCII code transformations need to be applied
        - If the length is divisible by 3 but not by 15, only the reverse transformation needs to be applied
        - If the length is divisible by 5 but not by 15, only the ASCII code transformation needs to be applied.
        - If the length is not divisible by any of these numbers, no transformation is required.
    2. Reversing the String:
        - To reverse the string, a helper function `reverseStr(str)` is used
        - The function first splits the string into an array of characters using   `str.split('')`
        - Then, it reverses the array using the `.reverse()` method
        - Finally, it joins the characters back into a string using `.join('')` and returns the reversed string
    3. Converting Characters to ASCII Codes:
        - To convert characters to their ASCII codes, the `charCodeAt(0)` method is used
        - The string is first split into an array of characters using str.split('');
        - Then, the `map()` method is used to apply the charCodeAt(0) function to each character in the array
        - The resulting array of ASCII codes is then joined back into a string using join(' '), where the space character ' ' is used as the separator between the ASCII codes.
    4. Applying Transformations:
        - If the length of the string is divisible by 15, both the reverse and ASCII code transformations are applied
        - The reverseStr(str) function is called to reverse the string.
        - Then, the reversed string is converted to ASCII codes using the steps mentioned in step 3.
        - If the length is divisible by 3 but not by 15, only the reverse transformation is applied by calling reverseStr(str)
        - If the length is divisible by 5 but not by 15, only the ASCII code transformation is applied using the steps mentioned in step 3
    5. Returning the Transformed String:
        - Return transformed string or empty one
#### This modular approach leverages techniques like splitting, reversing, joining, mapping over arrays, and using modulus to determine transformations based on length. It breaks down the problem for easier understanding and maintenance

 # By Ange Asifiwe BUHENDWA
