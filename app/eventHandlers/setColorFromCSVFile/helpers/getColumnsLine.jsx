#include "../../../config/read/readRGBLayersNames"

function getColumnsLine() {
    var foldersColumnNames = configDefaultValues.fileStructure.column_folders_name;
    var layers = readRGBLayersNames();

    var columns = foldersColumnNames + "," + layers;
    return columns;
}
