#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBlendingColorFolder.jsx"
#include "./helpers/getColorsErrors.jsx"
#include "./helpers/writeErrorsToCSV.jsx"
#include "./helpers/setColorsToLayers.jsx"

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
        var confirmation = confirm("Do you want still to load colors into PSD?", true);
        if (!confirmation) {
            return //abort program
        }
    }

    setColorsToLayers(ChosenCSVCOLORSFolders)

    alert("You succesfully set all colors from all rows from CSV file:\n" + CSV.fullName)

}
