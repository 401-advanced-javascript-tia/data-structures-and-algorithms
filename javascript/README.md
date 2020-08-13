# Reverse an Array
- Class 01 : 08-10-2020

## Challenge
- The challenge is to reverse an array of any length without using any methods that are built in to JavaScript. 

## Approach & Efficiency
- My approach with solving this challenge was to start at the end of the array and work forward from there by decrementing the index. With each position we can push that value to the new array. By doing it this way, it will work with an array of any length. 

## Solution
[Solution Code](challenges/arrayReverse/array-reverse.js)
![Array Reverse Whiteboard](challenges/whiteboards/array-reverse.png)
<hr>


# Shift an Array
- Class 02 : 08-11-2020

## Challenge
- The challenge is to shift an array in that the function will take in an array and an individual number, and add that individual number to the middle of the existing array. 

## Approach & Efficiency
- My thought is to find the length of the array, divide it by two to find the middle, and *somehow* retrieve that index number and insert the value in front of it. 

## Solution
[Solution Code](challenges/arrayShift/array-shift.js)
![Array Shift Whiteboard](challenges/whiteboards/array-shift.png)
<hr>


# Binary Search
- Class 03 : 08-12-2020
- Collab with Sean Murray

## Challenge
- Write a function that takes in a sorted array and a number, finds the number in the array, and returns the index of the found number. If not in array

## Approach & Efficiency
- Our original approach, as seen in the whiteboard, was to break the arr into a left and right half and check against the length. The plan was to recursively call the function with each slice until getting it down to the solution. However once we started tinkering with the pseudo code and playing around with it a bit, we realized we didn't need to break it into halves. We just needed to move the search area in "halves". In this sense we found the start and end of a search area, and altered it each time we didn't find the number in that search area. 

## Solution
[Solution Code](challenges/arrayBinarySearch/array-binary-search.js)
![Binary Search](challenges/whiteboards/binary-search.png)
<hr>


# Title
- Class 04 : 08-13-2020
- Mock Interview challenge with Daisy Johnson 

## Challenge
- Mock interview code challenge. I walked through my whiteboard process of the feature task with Daisy as my interviewer. The challenge was to work with the Fibonacci Sequence and write a function that takes in an integer and returns the n<sup>th</sup> number in the Fibonacci sequence. A new problem to me! 

## Approach & Efficiency
- After doing just a little bit of research on the Fibonacci sequence, I approached the problem from a very high level to start. The whiteboard below is as much as I got through in the 20-ish minutes of the mock interview. My approach was to first think about the sequence itself, and how it's represented with code. I decided it would be represented as numbers in an array, so we'd need to find the index of the number in the array since that is what would correspond to the n<sup>th</sup> position in the Fibonacci sequence. Since we don't know the exact integer being passed to the function, and consequently we don't know how long the sequence would need to be, my approach was to start with a beginning array of [ 0 , 1 ] and add to it in a while loop. We'd check the integer against the array and return the index of the integer in the array once found, and thus exiting the while loop.  

## Solution
[Solution Code](challenges/fibSeq/fibonacci-sequence.js)
![Fibonacci Sequence](challenges/whiteboards/fibonacci-seq.png)
<hr>


# Title
- Class 05 : 08-14-2020
- Collab: 

## Challenge
- Challenge description.

## Approach & Efficiency
- Approach description

## Solution
![Img title](challenges/whiteboards/_____)
