#include "./helpers/getDiffrentPSDLayersNames.jsx"
#include "./helpers/getDiffrentConfigLayersNames.jsx" //name has to be short, path is too long

function getDiffrentLayersNames(colorLayers, colorLayersNames, colorFolder) {

    var diffrentLayersInFolder = "";

    diffrentLayersInFolder += getDiffrentPSDLayersNames(colorLayers, colorLayersNames, colorFolder);
    diffrentLayersInFolder += getDiffrentConfigLayersNames(colorLayersNames, colorLayers, colorFolder);

    return diffrentLayersInFolder;
}
