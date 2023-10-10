import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// write, read , append and delete this text to `message.txt`
const filePath = path.join(PATH, 'message.txt');
const messageToSave = `Hello there,\nwelcome to Node.js `;

// write

// fs.writeFile(filePath, messageToSave, 'utf-8', (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('Hello there');
// });

// read
// fs.readFile(filePath, 'utf8', (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('read the massege ');
// });
// append
fs.appendFile(filePath, (err) => {
    if (err) {
        console.error(err);
    }
    console.log('append the massege ');
});

// unlink
// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('unlink the massege ');
// });
