const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

CSVToJSON().fromFile("./sample.csv").then(source => {
    console.log(source);
    var csv = JSONToCSV(source, { fields: ["Name", "Roll_No", "Address", "Institute","course" ]});
    FileSystem.writeFileSync("./destination.csv",csv);

});

