let item1 = +prompt('How much does your first item cost?');
let item2 = +prompt('How much does your second item cost?');
let item3 = +prompt('How much does your third item cost?');

let quantity1 = +prompt('How many of your first item did you buy?');
let quantity2 = +prompt('How many of your second item did you buy?');
let quantity3 = +prompt('How many of your third item did you buy?');

let total = (item1 * quantity1) + (item2 * quantity2) + (item3 * quantity3);

console.log('Your total is: $' + total)