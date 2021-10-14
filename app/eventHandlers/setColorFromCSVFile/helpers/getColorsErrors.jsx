#include "./getRGBColorsAndFolderNames.jsx"
#include "./getFoldersInCOLORS.jsx"
#include "../../../config/read/readRGBLayersNames.jsx"
#include "./getCoruptedColors.jsx"
#include "./getColorFoldersDiffrentNumber.jsx"
#include "./getDiffrentColorFolders.jsx"
#include "./diffrentLayersInActiveDocument.jsx"
#include "./diffrentCSVColorsAndCSVConfig.jsx"

function getColorsErrors(CSV) {

    var ChosenCSVCOLORSFolders = getRGBColorsAndFolderNames(CSV);

    var PSDfoldersInCOLORS = getFoldersInCOLORS();

    var configColorsTypes = readRGBLayersNames();

    var errorsCSV = "";

    errorsCSV += getCoruptedColors(ChosenCSVCOLORSFolders, configColorsTypes);

    errorsCSV += getColorFoldersDiffrentNumber(ChosenCSVCOLORSFolders, PSDfoldersInCOLORS, CSV);

    errorsCSV += getDiffrentColorFolders(PSDfoldersInCOLORS, ChosenCSVCOLORSFolders, CSV);

    errorsCSV += diffrentLayersInActiveDocument(PSDfoldersInCOLORS, configColorsTypes);

    errorsCSV += diffrentCSVColorsAndCSVConfig(CSV, configColorsTypes);

    return errorsCSV;
}
