$.level = 0; // Debugging level, Level: 0 - No Break, 1 - Break, 2 - Immediate Break

#include "./helpers/changeLayersFolderAttributes/prearrangeDocToProcess.jsx"
#include "./helpers/changeLayersFolderAttributes/doLayersVisible.jsx"
#include "./helpers/casting/convertValueStringToInt.jsx"

function leftUpperCornerColorBGSet(layer) {

    var doc = app.activeDocument;

    doc.colorSamplers.removeAll(); // Remove any Color Samplers that may already exist to avoid bug when stack samples is full and it is 4, in that case you can't do any new measurements

    doc.selection.deselect(); // deselct any selection that may already exist.

    var LayerBounds = layer.bounds;

    var x = convertValueStringToInt(LayerBounds[0]);
    var y = convertValueStringToInt(LayerBounds[1]);

    var pixelLocalisation_X_Y = [x, y];

    var colorSampleObject = null;

    colorSampleObject = doc.colorSamplers.add(pixelLocalisation_X_Y); // "try catch" does not work here

    var sampledColor = colorSampleObject.color.rgb.hexValue;
    colorSampleObject.remove();

    return sampledColor;
}


function isLayerEmptyCheck(layer) {

    var LayerBounds = layer.bounds;

    if (LayerBounds[0] === "0 px" && LayerBounds[1] === "0 px" && LayerBounds[2] === "0 px" && LayerBounds[3] === "0 px") {
        return true;
    } else {
        return false;
    }
}

function getHexColorInLayers(layers) {
    var RGBHexes = [];

    for (var j = 0; j < layers.length; j++) {

        if (isLayerEmptyCheck(layers[j])) {
            RGBHexes.push("null");
            continue;
        }

        RGBHexes.push(leftUpperCornerColorBGSet(layers[j]));
        layers[j].visible = false;
    }

    return RGBHexes;
}

function getAllHexValues(RGBfolders) {
    var HexColorValues = [];

    for (var i = 0; i < RGBfolders.length; i++) {
        var folderRGB = RGBfolders[i];
        var layers = folderRGB.artLayers;
        doLayersVisible(layers);
        HexColorValues.push([folderRGB.name, getHexColorInLayers(layers)]);
    }

    return HexColorValues;
}

function writeValuesToCSV(HexColorValues) {

    var text = "Group, R, G, B\n";

    for (var i = 0; i < HexColorValues.length; i++) {
        var flattenArray = [HexColorValues[i][0]].concat(HexColorValues[i][1]);
        for (var j = 0; j < flattenArray.length; j++) {
            text += flattenArray[j]
            if (j + 1 < flattenArray.length) {
                text += ", ";
            } else {
                text += "\n";
            }
        }
    }

    try {
        var path = saveTxt(text);
        return "You successfully saved values to " + path;

    } catch (error) {
        return error;
    }
}

function saveTxt(string) {
    var doc = app.activeDocument;
    var name = doc.name.replace(/\.[^\.]+$/, '');
    var ext = decodeURI(doc.name).replace(/^.*\./, '');
    if (ext.toLowerCase() != 'psd')
        return alert("document is not saved!\nSave document on disk first!");

    var docPath = doc.path;
    var scvPath = docPath + "/" + name + ".csv"
    var saveFile = File(scvPath);

    if (saveFile.exists)
        saveFile.remove();

    saveFile.encoding = "UTF8";
    saveFile.open("e", "TEXT", "????");
    saveFile.writeln(string);
    saveFile.close();

    return scvPath;
}

function main() {
    try {
        var doc = app.activeDocument;
    } catch (error) {
        return alert("You do not have any opened file!")
    }

    try {
        var docPath = doc.fullName;
    } catch (error) {
        return alert("To make use of the script, save the document on a drive first.");
    }

    var saveFile = confirm("Do you want to save file? File will be closed without saving and reopen after executing script.", true, "Warning!");
    if (saveFile) {
        doc.save();
    }

    var COLORSFolder = doc.layerSets.getByName("COLORS");

    if (!COLORSFolder) {
        return alert('No "COLORS" folder in top hierarchy');
    }
    
    var RGBfolders = COLORSFolder.layerSets;

    prearrangeDocToProcess(COLORSFolder, RGBfolders);

    var HexColorValues = getAllHexValues(RGBfolders);

    var promise = writeValuesToCSV(HexColorValues);
    alert(promise);

    // reset file
    doc.close(SaveOptions.DONOTSAVECHANGES);
    // reload to stage before processing file
    app.open(File(docPath));
}

main();