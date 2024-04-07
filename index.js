// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


// destructively append to the end of an array, use .push ()
function destructivelyAppendCat(name) {
    cats.push(name);
}

destructivelyAppendCat('Ralph');


// destructively preppend to the begining of an array, use .unshift()

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

destructivelyPrependCat('Bob');


// destructively remove last cat from the array, use .pop() -no arguments required

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat()

// destructively remove the first cat  using .shift() no arguments

function destructivelyRemoveFirstCat() {
    cats.shift();
}

destructivelyRemoveFirstCat();


// append a cat to the cats and returns a new array
function appendCat(name) {
    const otherCats = [...cats, name];
    console.log(otherCats);
    return otherCats;
}
appendCat('Broom');

// prepend cat to the cats array and return a new arra7
function prependCat(name) {
    const othersCats = [name, ...cats];
    console.log(othersCats);
    return othersCats;
}
prependCat('Arnold');

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat() {
    const updatedCats = [...cats.slice(0,-1)];
    console.log(updatedCats);
    return updatedCats;
}
removeLastCat()

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const myCats = [...cats.slice(1)];
    console.log(myCats);
    return myCats;
}
removeFirstCat()
