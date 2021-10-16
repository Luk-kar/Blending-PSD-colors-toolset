#include "./getCSVpath.jsx"

function saveCSV(string) {

    var csvPath = getCSVpath();
    var saveFile = File(csvPath);

    if (saveFile.exists)
        saveFile.remove();

    saveFile.encoding = "UTF8";
    saveFile.open("e", "TEXT", "????");
    saveFile.writeln(string);
    saveFile.close();

    return csvPath;
}
