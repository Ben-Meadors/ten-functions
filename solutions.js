"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(x){
    if (x === true){
        return true;
    }else {
        return false;
    }
}

function isFalse(x){
    if (x == false){
        return true;
    }else {
        return false;
    }
}
function not(x){
    return !x
}

function addOne(x){
    return Number(x) + 1
}

function isEven(x){
    if (parseInt(x) % 2 == 0) {
        return true;
    }else {
        return false;
    }
}
console.log(isEven())

function isIdentical(x, y){
    if (x === y) {
        return true;
    }else {
        return false;
    }
}

function isEqual(x, y){
    if (x == y) {
        return true;
    }else {
        return false;
    }
}

function or(x, y) {
    return (x || y)
}

function and(x, y) {
    return (x && y)
}

function concat(x, y){
    return String(x) + String(y);
}