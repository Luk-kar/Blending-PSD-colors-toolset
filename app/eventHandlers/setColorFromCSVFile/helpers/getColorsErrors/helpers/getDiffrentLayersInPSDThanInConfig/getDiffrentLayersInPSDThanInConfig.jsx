#include "./helpers/getDiffrentLayersInPSD/getDiffrentLayersInPSD.jsx"
#include "./helpers/convertIntoCSVValues/convertIntoCSVValues.jsx"

function getDiffrentLayersInPSDThanInConfig(foldersInColorFolder, colorLayersNames) {  //todo

    var diffrentLayersInPSD = "";

    diffrentLayersInPSD = getDiffrentLayersInPSD(foldersInColorFolder, colorLayersNames)

    if (diffrentLayersInPSD) {
        return convertIntoCSVValues(diffrentLayersInPSD)
    }

    return "";
}