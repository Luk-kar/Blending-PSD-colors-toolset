#include "./getCSVColorsAndFoldersNames.jsx"
#include "./getPSDFoldersInCOLORS.jsx"
#include "../../../config/read/readRGBLayersNames.jsx"
#include "./getCoruptedColors.jsx"
#include "./getColorFoldersDiffrentNumber.jsx"
#include "./getDiffrentColorFolders.jsx"
#include "./getDiffrentLayersInActivePSDThanInConfig.jsx"
#include "./getDiffrentColorsCSVAndConfig.jsx"

function getColorsErrors(CSV) {

    var ChosenCSVCOLORSFolders = getCSVColorsAndFoldersNames(CSV);

    var PSDfoldersInCOLORS = getPSDFoldersInCOLORS();

    var configColorsTypes = readRGBLayersNames();

    var errorsCSV = "";

    errorsCSV += getCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes);

    errorsCSV += getColorFoldersDiffrentNumber(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getDiffrentColorFolders(PSDfoldersInCOLORS, ChosenCSVCOLORSFolders, CSV);

    errorsCSV += getDiffrentLayersInActivePSDThanInConfig(PSDfoldersInCOLORS, configColorsTypes); //to

    errorsCSV += getDiffrentColorsCSVAndConfig(CSV, configColorsTypes);

    return errorsCSV;
}
