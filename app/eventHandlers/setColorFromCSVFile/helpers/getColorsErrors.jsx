#include "./getCSVColorsAndFoldersNames.jsx"
#include "./getPSDFoldersInCOLORSFolder.jsx"
#include "../../../config/read/readRGBLayersNames.jsx"
#include "./getCSVCoruptedColors.jsx"
#include "./getCSVAndPSDDiffrenceColorsFoldersCount.jsx"
#include "./getCSVAndPSDDiffrentColorsFolders.jsx"
#include "./getDiffrentLayersInPSDThanInConfig.jsx"
#include "./getDiffrentColorsCSVAndConfig.jsx"

function getColorsErrors(CSV) {

    var ChosenCSVCOLORSFolders = getCSVColorsAndFoldersNames(CSV);

    var PSDfoldersInCOLORS = getPSDFoldersInCOLORSFolder();

    var configColorsTypes = readRGBLayersNames();

    var errorsCSV = "";

    errorsCSV += getCSVCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes);

    errorsCSV += getCSVAndPSDDiffrenceColorsFoldersCount(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getCSVAndPSDDiffrentColorsFolders(PSDfoldersInCOLORS, ChosenCSVCOLORSFolders, CSV);

    errorsCSV += getDiffrentLayersInPSDThanInConfig(PSDfoldersInCOLORS, configColorsTypes);

    errorsCSV += getDiffrentColorsCSVAndConfig(CSV, configColorsTypes);

    return errorsCSV;
}
