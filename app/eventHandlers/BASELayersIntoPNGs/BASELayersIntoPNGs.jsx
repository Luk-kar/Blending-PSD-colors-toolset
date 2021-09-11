#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBaseFolder.jsx"
#include "../readColorFromLayers/helpers/changeLayersFolderAttributes/doInvisibleLayers.jsx"
#include "../readColorFromLayers/helpers/changeLayersFolderAttributes/doInvisibleFolders.jsx"
#include "../readColorFromLayers/helpers/checkingConditions/isLayerEmptyCheck.jsx"

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
    var BASEFolder = doc.layerSets.getByName("BASE");
    var BASELayers = BASEFolder.artLayers;

    var copyFolder = doc.layerSets.add();
    copyFolder.name = "COPIED"

    for (var i = BASELayers.length - 1; i >= 0; i--) {

        doc.activeLayer = BASELayers[i];

        if(isLayerEmptyCheck(BASELayers[i])) {
            continue;
        }

        selectLayerPixels();
        copyLayer();

        copyFolder.artLayers.add();
        pasteLayer();
    }

    doInvisibleLayers();
    doInvisibleFolders();

    copyFolder.visible =true;    
    var copiedLayers = copyFolder.artLayers;

    var docName = getDocName();
    var docFolder = doc.path;

    var f = new Folder(docFolder + "/" + docName + "_BASE/");
    if (!f.exists){
        f.create();
    }

    for (var i = copiedLayers.length - 1; i >= 0; i--) {
        var layer = copiedLayers[i];
        selectLayerPixels();

        var LayerBounds = layer.bounds;

        crop({
            left: LayerBounds[0],
            top: LayerBounds[1],
            right: LayerBounds[2],
            bottom: LayerBounds[3],
            deleteCropped: false
        });

        var docName = getDocName();
        var layerName = layer.name;
        var docFolder = doc.path;
        var savePath = f + "/" + layerName + ".png"
        var saveFile = File(savePath);

        sfwPNG24(saveFile);
    }

    doc.close(SaveOptions.DONOTSAVECHANGES);
    app.open(File(docPath));

    alert("succes")
}

function sfwPNG24(saveFile){

    var pngOpts = new PNGSaveOptions;

    pngOpts.compression = 9;

    pngOpts.interlaced = false;

    activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE);

}

function getFullDocPath() {
    var doc = app.activeDocument;
    return doc.fullName;
}

function getDocName() {
    var doc = app.activeDocument;
    return doc.name;
}

function crop(data)
{
  if (data.deleteCropped == undefined) data.deleteCropped = true; // default value

  var desc = new ActionDescriptor();
  var descRectangle = new ActionDescriptor();
  descRectangle.putUnitDouble(charIDToTypeID('Top '), charIDToTypeID('#Pxl'), data.top);
  descRectangle.putUnitDouble(charIDToTypeID('Left'), charIDToTypeID('#Pxl'), data.left);
  descRectangle.putUnitDouble(charIDToTypeID('Btom'), charIDToTypeID('#Pxl'), data.bottom);
  descRectangle.putUnitDouble(charIDToTypeID('Rght'), charIDToTypeID('#Pxl'), data.right);
  desc.putObject(charIDToTypeID('T   '), charIDToTypeID('Rctn'), descRectangle);
  desc.putUnitDouble( charIDToTypeID('Angl'), charIDToTypeID('#Ang'), 0.000000 );
  desc.putBoolean(charIDToTypeID('Dlt '), data.deleteCropped);
  executeAction(charIDToTypeID('Crop'), desc, DialogModes.NO);
} 

function selectLayerPixels() {
  var id710 = charIDToTypeID( "setd" );
  var desc168 = new ActionDescriptor();
  var id711 = charIDToTypeID( "null" );
  var ref128 = new ActionReference();
  var id712 = charIDToTypeID( "Chnl" );
  var id713 = charIDToTypeID( "fsel" );
  ref128.putProperty( id712, id713 );
  desc168.putReference( id711, ref128 );
  var id714 = charIDToTypeID( "T   " );
  var ref129 = new ActionReference();
  var id715 = charIDToTypeID( "Chnl" );
  var id716 = charIDToTypeID( "Chnl" );
  var id717 = charIDToTypeID( "Trsp" );
  ref129.putEnumerated( id715, id716, id717 );
  desc168.putReference( id714, ref129 );
  executeAction( id710, desc168, DialogModes.NO );
}

function copyLayer() {
    var idCpyM = charIDToTypeID( "CpyM" );
    executeAction( idCpyM, undefined, DialogModes.NO );
}

function pasteLayer() {
var idpast = charIDToTypeID( "past" );
    var desc6 = new ActionDescriptor();
    var idinPlace = stringIDToTypeID( "inPlace" );
    desc6.putBoolean( idinPlace, true );
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc6.putEnumerated( idAntA, idAnnt, idAnno );
executeAction( idpast, desc6, DialogModes.NO );
}