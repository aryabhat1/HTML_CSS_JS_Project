const fs = require("fs");
// let text = fs.readFileSync("delete.txt", "utf-8");

let text = fs.readFileSync("mytxt.txt", "utf-8");


text = text.replace("good", "Rohan");


// console.log("The content of file is : ");
// console.log(text);


console.log("The new file is: ");
fs.writeFileSync("rohan.txt", text);


