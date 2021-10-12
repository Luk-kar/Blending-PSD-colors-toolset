#include "../utils/isActiveDocument.jsx"
#include "./helpers/createCOLORFolderIfNotExists/createCOLORFolderIfNotExists.jsx"
#include "./helpers/createBASEFolderIfNotExists/createBASEFolderIfNotExists.jsx"

function createFoldersTemplates() {
    
    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    // save starting conditions
    var startingDialogsOptions = app.displayDialogs
    app.displayDialogs = DialogModes.NO
    var startingFGColor = app.foregroundColor
    var startingBGColor = app.backgroundColor

    createBASEFolderIfNotExists();
    
    createCOLORFolderIfNotExists();

    // restore starting conditions
    app.foregroundColor = startingFGColor
    app.backgroundColor = startingBGColor
    app.displayDialogs = startingDialogsOptions

    alert("You succesfully created needed project folders!")
}


