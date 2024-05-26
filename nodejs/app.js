const fs = require('fs');

// Read content 
fs.readFile('Async.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        console.log('File contents:', data);
    }
});

// Append new data
const newData = 'This is appended to the file.\n';

fs.appendFile('Async.txt', newData, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
    } else {
        console.log('New line appended successfully.');
    }
});

// Rename the file
fs.rename('Sample.txt', (err) => {
    if (err) {
        console.error('Error renaming the file:', err);
    } else {
        console.log('File renamed successfully.');
    }
});

// Delete file
fs.unlink('Sample.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});
