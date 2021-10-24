#include "./helpers/getChosenCSVColors/getChosenCSVColors.jsx"
#include "./helpers/getAllDiffrentColors/getAllDiffrentColors.jsx"
#include "../../../../../../config/read/utils/getConfigPath.jsx"

function getDiffrentColorsCSVAndConfig(CSV, configColorsTypes) {

    var CSVToReturn = "";
    var wrongColorsNames = "";

    var chosenCSVColors = getChosenCSVColors(CSV);

    wrongColorsNames = getAllDiffrentColors(wrongColorsNames, chosenCSVColors, configColorsTypes);

    if (wrongColorsNames) {
        CSVToReturn += "\n" +
            "\ndiffrent chosen CSV colors and CSV config colors\n" +
            "chosen CSV," + CSV.fullName + "\n" +
            "config CSV," + getConfigPath() + "\n" +
            "colors," + wrongColorsNames;
    }

    return CSVToReturn;
}

