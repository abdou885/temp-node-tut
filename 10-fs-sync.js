// Import the 'readFileSync' and 'writeFileSync' methods from the 'fs' module
const { readFileSync, writeFileSync } = require('fs');
console.log('start')
// Read the content of the file 'first.txt' from the 'content' directory, in UTF-8 format
const first = readFileSync('./content/first.txt', 'utf8');

// Read the content of the file 'second.txt' from the 'content' directory, in UTF-8 format
const second = readFileSync('./content/second.txt', 'utf8');

// Print the contents of 'first.txt' and 'second.txt' to the console
console.log(first, second);

// Write the combined result to 'result-sync.txt' in the 'content' directory
// The flag 'a' appends the new content to the end of the file if it already exists
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);
console.log('done with the task');
console.log('starting the next task');

