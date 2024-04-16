const { stdin } = require('process');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("please enter your name: ", (name) => {
    console.log("you entered: ",name);
    r1.close();
})

r1.on('close', () => {
    console.log("interface closed");
    process.exit(0);
})