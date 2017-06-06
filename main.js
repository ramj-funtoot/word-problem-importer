var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var SYLLABUS_ROOT = 'D:/Code/funtoot/Src/Funtoot/Syllabus/Mathematics'
var wpQuestions = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
wpQuestions.forEach(function (q) {
    console.log('Processing ' + q.QuestionId);
    var tokens = q.SyllabusName.split('|');
    console.log('Reading ' + SYLLABUS_ROOT + '/' + tokens[0] + '/complexity.xml')
    var xmlData = fs.readFileSync(SYLLABUS_ROOT + '/' + tokens[0] + '/complexity.xml');
    parser.parseString(xmlData, function (err, result) {
        console.dir(result);
        console.log('Done');
        return;
    });
}, this);
