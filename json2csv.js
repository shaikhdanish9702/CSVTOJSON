const { Parser } = require('json2csv');
const fs = require('fs');

// JSON data to be converted
const jsonData = [
  { name: 'Alice', age: 30, location: 'New York' },
  { name: 'Bob', age: 25, location: 'Los Angeles' },
  { name: 'Charlie', age: 35, location: 'San Francisco' },
];

// Specify the CSV fields based on your JSON structure
const fields = ['name', 'age', 'location'];

// Create a parser
const json2csvParser = new Parser({ fields });

// Convert JSON to CSV
const csv = json2csvParser.parse(jsonData);

// Write CSV to a file
fs.writeFileSync('output.csv', csv, 'utf-8');

console.log('CSV file has been created: output.csv');
