#include "../utils/getCSVColorsAndFoldersNames.jsx"
#include "../../../utils/getFoldersInCOLORSFolder.jsx"
#include "../../../../config/read/readRGBLayersNames.jsx"
#include "./helpers/getCSVCoruptedColors/getCSVCoruptedColors.jsx"
#include "./helpers/getCSVAndPSDDiffrenceColorsFoldersCount.jsx"
#include "./helpers/getCSVAndPSDDiffrentColorsFolders/getCSVAndPSDDiffrentColorsFolders.jsx"
#include "./helpers/getDiffrentLayersInPSDThanInConfig/getDiffrentLayersInPSDThanInConfig.jsx"
#include "./helpers/getDiffrentColorsCSVAndConfig/getDiffrentColorsCSVAndConfig.jsx"

function getColorsErrors(CSV) {

    var ChosenCSVCOLORSFolders = getCSVColorsAndFoldersNames(CSV);

    var PSDfoldersInCOLORS = getFoldersInCOLORSFolder();

    var configColorsTypes = readRGBLayersNames();

    var errorsCSV = "";

    errorsCSV += getCSVCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes);

    errorsCSV += getCSVAndPSDDiffrenceColorsFoldersCount(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getCSVAndPSDDiffrentColorsFolders(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getDiffrentLayersInPSDThanInConfig(PSDfoldersInCOLORS, configColorsTypes);

    errorsCSV += getDiffrentColorsCSVAndConfig(CSV, configColorsTypes);

    return errorsCSV;
}
