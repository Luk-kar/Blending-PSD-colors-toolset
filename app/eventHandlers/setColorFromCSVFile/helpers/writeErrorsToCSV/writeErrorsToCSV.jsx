#include "./getsSCVErrorPath.jsx"

function writeErrorsToCSV(CSV, corruptedColorsCSV) {

    var corruptedFilePath = CSV.fullName;
    var CSVErrorsPath = getsSCVErrorPath(corruptedFilePath);

    var CSVErrors = File(CSVErrorsPath);

    if (CSVErrors.exists) {
        CSVErrors.remove();
    }

    CSVErrors.encoding = "UTF8";
    CSVErrors.open("e", "TEXT", "????");
    CSVErrors.write(corruptedColorsCSV);
    CSVErrors.close();

    alert("The CSV with errors is saved in:\n" + CSVErrorsPath);
}
