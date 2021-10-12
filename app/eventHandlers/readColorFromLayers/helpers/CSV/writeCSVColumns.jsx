#include "./writeInCSVFile.jsx"

function writeCSVColumns(layersNames) {
    var columns = "groups,"; //todo
    for (var i = 0; i < layersNames.length; i++) {
        columns += layersNames[i];
        if (i + 1 !== layersNames.length) {
            columns += ",";
        }
        if (i + 1 === layersNames.length) {
            columns += "\n";
        }
    }

    writeInCSVFile(columns);
}