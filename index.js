var fs = require("fs");
let file = fs.readFileSync('./movie_lines.txt', 'utf8');
// let file = fs.readFileSync('./abcd.txt', 'utf8');
let fileData = file.split('\n');

let i = fileData.length;
let prevNum = 100000000;
let testSize = 5000;

while(i > 0) {
    i--;
    try {
        let lineData1 = fileData[i].split(' +++$+++ ');
        if(lineData1.length < 2) continue;
        prevNum = parseInt(lineData1[0].split("L")[1]);
        i--;
        let lineData2 = fileData[i].split(' +++$+++ ');
        if(lineData2.length < 2) continue;
        let line = parseInt(lineData2[0].split("L")[1]);
        if(prevNum - line > 1) { i++; continue; }
        let actorOne = lineData1[3];
        let actorTwo = lineData2[3];
        let lineOne = lineData1[4];
        let lineTwo = lineData2[4];

        if(testSize > 0) {
            fs.appendFileSync('test_q.txt', lineOne+'\n');
            fs.appendFileSync('test_a.txt', lineTwo+'\n');
            testSize--;
        }

        fs.appendFileSync('main_q.txt', lineOne+'\n');
        fs.appendFileSync('main_a.txt', lineTwo+'\n');
    } catch(err) {
        console.log("err: ", err)
        console.log("Some error occured");
    }
}
console.log("All done");