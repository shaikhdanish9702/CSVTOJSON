const csv = require('csvtojson');
const csvStrLine=` 
1,2,3
4,5,6
7,8,9`
const csvStr=`1,2,3
4,5,6
7,8,9`
// Specify the path to your CSV file
const csvFilePath = 'data.csv';
const csvToJson=(csvFilePath)=>{
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  })
  .catch((err) => {
    console.error(err);
  });
}

const csvStringToCsvRow=(csvStr)=>{
  csv({
    noheader:true,
    output: "csv"
})
.fromString(csvStr)
.then((csvRow)=>{ 
    console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
})

}

const csvLine=(csvStrLine)=>{
csv({output:"line"})
.fromString(csvStrLine)
.subscribe((csvLine)=>{ 
    console.log(csvLine)
})
}

const CSVFunctions=async(csvFilePath,csvStr,csvStrLine)=>{
  await csvToJson(csvFilePath) // Use csvtojson to convert CSV to JSON

  await csvStringToCsvRow(csvStr) // From CSV String to CSV Row'

  await csvLine(csvStrLine)//Convert to CSV lines
}

CSVFunctions(csvFilePath,csvStr,csvStrLine)
