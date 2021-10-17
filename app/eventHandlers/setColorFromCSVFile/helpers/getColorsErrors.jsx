#include "./getCSVColorsAndFoldersNames.jsx"
#include "./getPSDFoldersInCOLORSFolder.jsx"
#include "../../../config/read/readRGBLayersNames.jsx"
#include "./getCSVCoruptedColors.jsx"
#include "./getCSVAndPSDDiffrenceColorsFoldersCount.jsx"
#include "./getCASVAndPSDDiffrentColorFolders.jsx"
#include "./getDiffrentLayersInActivePSDThanInConfig.jsx"
#include "./getDiffrentColorsCSVAndConfig.jsx"

function getColorsErrors(CSV) {

    var ChosenCSVCOLORSFolders = getCSVColorsAndFoldersNames(CSV);

    var PSDfoldersInCOLORS = getPSDFoldersInCOLORSFolder();

    var configColorsTypes = readRGBLayersNames();

    var errorsCSV = "";

    errorsCSV += getCSVCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes);

    errorsCSV += getCSVAndPSDDiffrenceColorsFoldersCount(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getCASVAndPSDDiffrentColorFolders(PSDfoldersInCOLORS, ChosenCSVCOLORSFolders, CSV);

    errorsCSV += getDiffrentLayersInActivePSDThanInConfig(PSDfoldersInCOLORS, configColorsTypes); //to

    errorsCSV += getDiffrentColorsCSVAndConfig(CSV, configColorsTypes);

    return errorsCSV;
}
