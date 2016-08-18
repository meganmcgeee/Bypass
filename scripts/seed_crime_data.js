var mongoose = require('../config/mongo');
var DangerInfluenceWeightModel = require("../models/danger_influence_weight");
var fs = require('fs');
var parse = require('csv-parse');
var dangerInfluenceWeightPath = __dirname + "/danger_influence_weight_seed.csv";

fileBuffer = fs.readFileSync(dangerInfluenceWeightPath);
to_string = fileBuffer.toString();
split_lines = to_string.split("\n");
totalItemsInCSV = split_lines.length-1;
console.log("Total rows in csv: " + totalItemsInCSV.toString());

var csvData=[];
var savedRows = 0;
fs.createReadStream(dangerInfluenceWeightPath)
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvRow) {
		console.log(csvRow);
		csvData.push({ type: csvRow[0], weight: Number(csvRow[1]) });
  })
  .on('end',function() {
    console.log(csvData);
      DangerInfluenceWeightModel.insertMany(csvData, function(err, docs) {
				if (err) { console.log ('Error on save!') }
				else { process.exit(); }
      });
  });


//var dangerInfluenceWeight = new DangerInfluenceWeightModel ({ type: 'assault', weight: 3 });
//dangerInfluenceWeight.save(function (err) {
//  if (err) {
//    console.log ('Error on save!')
//  }
//  else {
//    process.exit();
//  }
//});
