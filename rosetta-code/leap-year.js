/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/leap-year

Determine whether a given year is a leap year in the Gregorian calendar.
*/

function isLeapYear(year) {
    const date = new Date(`February 29 ${year}`);
    return date.toDateString().includes('Feb 29');
}