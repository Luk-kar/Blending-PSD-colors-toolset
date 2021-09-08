#include "../utils/isActiveDocument.jsx"
#include "../utils/checkIfHasItBaseFolder.jsx"

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
    var BASEFolder = doc.layerSets.getByName("BASE");
    var BASELayers = BASEFolder.artLayers;

    var copyFolder = doc.layerSets.add();
    copyFolder.name = "COPIED"

    for (var i = BASELayers.length - 1; i >= 0; i--) {

        doc.activeLayer = BASELayers[i];

        selectLayerPixels();
        copyLayer();

        copyFolder.artLayers.add();
        pasteLayer();
    }

    // make all invisible
    // make visible BASEFolder
    // layersToFiles
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