#include "../getCSVColorsAndFoldersNames.jsx"
#include "../getPSDFoldersInCOLORSFolder.jsx"
#include "../../../../config/read/readRGBLayersNames.jsx"
#include "./helpers/getCSVCoruptedColors.jsx"
#include "./helpers/getCSVAndPSDDiffrenceColorsFoldersCount.jsx"
#include "./helpers/getCSVAndPSDDiffrentColorsFolders.jsx"
#include "./helpers/getDiffrentLayersInPSDThanInConfig.jsx"
#include "./helpers/getDiffrentColorsCSVAndConfig.jsx"

function getColorsErrors(CSV) {

    var ChosenCSVCOLORSFolders = getCSVColorsAndFoldersNames(CSV);

    var PSDfoldersInCOLORS = getPSDFoldersInCOLORSFolder();

    var configColorsTypes = readRGBLayersNames();

    var errorsCSV = "";

    errorsCSV += getCSVCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes);

    errorsCSV += getCSVAndPSDDiffrenceColorsFoldersCount(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getCSVAndPSDDiffrentColorsFolders(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getDiffrentLayersInPSDThanInConfig(PSDfoldersInCOLORS, configColorsTypes);

    errorsCSV += getDiffrentColorsCSVAndConfig(CSV, configColorsTypes);

    return errorsCSV;
}
