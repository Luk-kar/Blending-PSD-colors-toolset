#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "./helpers/getColorsErrors/getColorsErrors.jsx"
#include "./helpers/writeErrorsToCSV/writeErrorsToCSV.jsx"
#include "./helpers/setColorsToLayers/setColorsToLayers.jsx"

function setColorFromCSVFile() {

    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    if(!checkIfHasItBlendingColorFolder()) {
        alert("There is no " + readColorFolderName() + " folder");
        return; //abort program
    }

    var CSV = File.openDialog("Select the csv file", "*.csv", false);
    if (!CSV) {
        alert("You did not select the CSV file!")
        return; //abort program
    }

    var errorsCSV = getColorsErrors(CSV)
    
    if (errorsCSV) {
        writeErrorsToCSV(CSV, errorsCSV)
        var proceedFurther = confirm("Do you want still to load colors into PSD?", true);
        if (!proceedFurther) {
            return //abort program
        }
    }

    setColorsToLayers(CSV)

    alert("You succesfully set all colors from all rows from CSV file:\n" + CSV.fullName)

}
