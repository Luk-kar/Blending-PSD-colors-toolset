#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBaseFolder.jsx"
#include "./helpers/copy/copyPixelAreasToFolder.jsx"
#include "./helpers/changeLayersFolderAttributes/makeOnlyVisible.jsx"
#include "./helpers/getPaths/getFolderToSavePNGs.jsx"
#include "./helpers/saveToPNGs/saveLayersToPNGsInFolder.jsx"
#include "./helpers/saveToPNGs/saveLayersToPNGsInFolder.jsx"
#include "../utils/revealFileInExplorer.jsx"
#include "../../config/read/readBaseFolderName.jsx"

function BASELayersIntoPNGs() {

    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    if(!checkIfHasItBaseFolder()) {
        alert("There is no BASE folder");
        return; //abort program
    }

    var doc = app.activeDocument;
    var docPath = doc.fullName;
    var BASEFolder = doc.layerSets.getByName(readBaseFolderName());
    var BASELayers = BASEFolder.artLayers;

    var copyFolder = doc.layerSets.add();
    copyFolder.name = "COPIED"

    copyPixelAreasToFolder(BASELayers, copyFolder);

    makeOnlyVisible(copyFolder);
    var copiedLayers = copyFolder.artLayers;

    var copiedLayersPNGsFolder = getFolderToSavePNGs();

    saveLayersToPNGsInFolder(copiedLayers, copiedLayersPNGsFolder);

    doc.close(SaveOptions.DONOTSAVECHANGES);
    app.open(File(docPath));

    alert("You succesfully saved PNGs to " + copiedLayersPNGsFolder);

    var openExplorer = confirm("Do you want to open explorer?", true);
    if (openExplorer) {
        revealFileInExplorer(copiedLayersPNGsFolder);
    }
}

