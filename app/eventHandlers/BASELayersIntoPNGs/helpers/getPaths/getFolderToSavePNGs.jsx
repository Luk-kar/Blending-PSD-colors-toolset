#include "../getDocName.jsx"

function getFolderToSavePNGs() {

    var doc = app.activeDocument;
    var docName = getDocName();
    var docFolder = doc.path;

    var newFolderPath = docFolder + "/" + docName + "_BASE/";
    var copiedLayersPNGsFolder = new Folder(newFolderPath);

    icrementFolderNameIfExists();

    copiedLayersPNGsFolder.create();

    return copiedLayersPNGsFolder;

    function icrementFolderNameIfExists() {
        var num = 0;
        while (copiedLayersPNGsFolder.exists) {
            num += 1;
            newFolderPath = docFolder + "/" + docName + "_BASE(" + num + ")/";
            copiedLayersPNGsFolder = new Folder(newFolderPath);
        }
    }
}
