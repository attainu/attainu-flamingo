# Coding challenge description

## Week 04
### Day 2

Find a given a number is prime or not

### Day 3
Consider the following array -
var players = [
{ name: "Roger Federer", rank: 1 },
{ name: "Rafel Nadal", rank: 2 },
{ name: "Nalbandian", rank: 12 },
{ name: "Andy Murray", rank: 14 },
{ name: "Andy Roddick", rank: 4 },
{ name: "Pete Sampras", rank: 3 },
{ name: "Rod Laver", rank: 190 },
{ name: "Andre Agassi", rank: 11 },
{ name: "Novak Djokovic", rank: 5 },
{ name: "Arthur Ashe", rank: 8 },
];
Write a for loop that only prints players with rank less than or equal to 10.

### Day 4
Write a Javascript program that compares two arrays and print whether they are equal or not.

### Day 5 
Create a Javascript program that produces a table of numbers from 1 to 10 and squares of them 

## Week 05 

### Day 1
Given a string, write a javascript function to check if it is palindrome or not.
A string is said to be palindrome if reverse of the string is same as string. For example, “abba” is palindrome, but “abbc” is not palindrome.

### Day 2 
Anagram
Given 2 strings, find whether one is an anagram of the other.
Two strings are anagrams if they are written using the same exact letters. Each letter should have the same count in both strings. e.g. 'binary' and 'brainy'

### Day 3 
Write a function that takes a number input in seconds and returns the number of hours, minutes and seconds as output. Separate the number of hours, minutes and seconds with colons :.
Input: 126
Output: "0:2:6"
Input: 45
Output: "0:0:45"
Input: 3700
Output: "1:1:40"

### Day 4 
Write a function to take a string as input and change each letter to the next letter in the alphabet.
Input: "hello"
Output: "ifmmp"
Input: "zeta"
Output: "afub"

### Day 5
Create a Javascript function named frequency that takes an array and returns the frequency of each item in the array as an object.
For example, consider an array named names -
`let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"];`
Calling the function with the above array frequency(names) should give -
{
    "Ansal": 1,
    "Vaibhav": 2,
    "Divyam": 1,
    "Dwarak": 1
}
Another example -
`let arr = [2, 3, 2, 4, 3, 5, 3];`
`frequency(arr);`
The above code should output -
```
{
    2: 2,
    3: 3,
    4: 1,
    5: 1
}
```

## Week 06

### Day 01 
Use the below Ajax syntax to load the data of the cities (cities.json)
$.ajax({
                url: "https://api.jsonbin.io/b/5ddb7fe5040d843991f8a4e5",
                headers: {"secret-key": "$2b$10$u3A2D8i3xZI9s1Bq/YihAuje8T/nq4C0ulejX8TgqV2OCY1rijESi"},
                success: function(response){
                    console.log("done");
                }
            });

Load the data and then write a Javascript function that takes a letter and finds all the cities that starts with that letter.

### Day 02 
Write a Javascript program that removes duplicates from an array.
For example, if the input array is `[1, 2, 2, 3, 4, 5, 6, 6, 7]`, the output of the program should be [1, 2, 3, 4, 5, 6, 7]

### Day 03 
Create two Javascript functions - `largest` and `smallest`.

Both of them takes an array of numbers as an input.

`largest` should return the largest number in the array.

`smallest` should return the smallest number in the array.

### Day 04 
Write a Javascript function that finds all the number pairs in an array whose sum is equal to a given number.
For example, if `findPairs` is our number, here are some sample calls -
`findPairs(10, [1, 2, 4, 5, 6, 10, 12])` will return `[4, 6]` as adding those two together produces 10.
Remember, we are trying to find all pairs, which means set of two values.

## Week 7 

### Day 01 
Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.
Input matrix
0 1 1 1
0 0 1 1
1 1 1 1  // this row has maximum 1s
0 0 0 0
Output: 2

### Day 02 
Write a Javascript function that finds the missing numbers in an array of integers from 1 to N, where N being the largest number in the array.

Some example inputs and outputs -

findMissing( [1, 2, 4, 5, 6] ) should return [3] as 3 is the missing number in the series.
findMissing( [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15] ) should return [8, 10] as both of them are missing the series.

You can assume that the input array does not contain any duplicates. 

### Day 03 
Given a number, return the sum of digits of the number
Input:  123
Output: 6 (1+2+3)

### Day 04 
Given an array of n distinct elements, the task is to find all elements in array which have at-least two greater elements than themselves.
Input: [2, 8, 7, 1, 5]
Output: 2 , 1,  5

### Day 05 
Write a Javascript function that takes two arrays as an input and calculate the number of elements that belong to both of the arrays.
For example, given two arrays -let a =[5,2,8,9,4] and let b = [3,2,9,5] The function commonElements(a, b) should return 3 because 2, 5 and 9 are common to both of the arrays.

## Week 08

### Day 01 
Write a Javascript function that checks if a string contains all unique characters. Return true if all the characters are unique or false if it contains duplicate characters.
For example, ansal contains two a and hence the function should return false for it. arkesh contains no repeated character and hence the function should return true.
You can treat small case and big case of same characters as different characters.

### Day 02 
Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same.

### Day 03 
Create a JavaScript function that reads a file and search for a string in it.
For example, if called like this-searchFile("file.txt", "Ansal"), it should return the line numbers and text in the file that contains the string "Ansal".

### Day 04 
Coding challenge for the day -Given a distance n, please write a Javascript program that counts the total number of ways to cover the distance with 1, 2 and 3 steps.

Some examples:
Say n = 3
1 step + 1 step + 1 step
1 step + 2 step
2 step + 1 step
3 step

So we got four steps out of 1, 2 and 3 steps.

The output should be 4.

Say n = 4
1 step +  1 step + 1 step + 1 step
1 step + 1 step + 2 step
1 step + 2 step + 1 step
1 step + 3 step
2 step + 1 step + 1 step
2 step + 2 step
3 step + 1 step

### Day 05 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

## Week 09 
### Day 01 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

### Day 03 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

### Day 04 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

### Day 05
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.
Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1] 