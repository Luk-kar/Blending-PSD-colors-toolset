#include "./getCSVpath.jsx"

function writeInCSVFile(string) {
    var csvPath = getCSVpath();
    var csvFile = File(csvPath);
    csvFile.open("a", "TEXT", "????");
    csvFile.write(string);
    csvFile.close();
}
