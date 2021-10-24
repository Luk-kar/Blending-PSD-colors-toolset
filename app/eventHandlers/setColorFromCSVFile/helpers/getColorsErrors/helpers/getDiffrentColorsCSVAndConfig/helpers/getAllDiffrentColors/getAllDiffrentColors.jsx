#include "./helpers/getDiffrentColors.jsx"

function getAllDiffrentColors(wrongColorsNames, chosenCSVColors, configColorsTypes) {

    var wrongColorsNames = "";

    wrongColorsNames += getDiffrentColors(chosenCSVColors, configColorsTypes);
    wrongColorsNames += getDiffrentColors(configColorsTypes, chosenCSVColors);

    return wrongColorsNames;
}