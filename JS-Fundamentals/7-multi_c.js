#!/usr/bin/node
const arg = process.argv[2];
const count = parseInt(arg);
if (isNaN(count)) {
console.log("Missing number of occurrences");
} else {
let i = 0;
let output = "";
while (i < count) {
output += "C is fun";
if (i < count - 1) output += "\n";
i++;
}
console.log(output);
}

