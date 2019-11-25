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