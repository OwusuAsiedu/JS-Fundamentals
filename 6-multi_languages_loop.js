const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let i = 0;
let output = "";

while (i < messages.length) {
  output += messages[i] + "\n";
  i++;
}

console.log(output.trim());