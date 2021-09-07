#include "../utils/isActiveDocument.jsx"
#include "./helpers/createCOLORFolderIfNotExists/createCOLORFolderIfNotExists.jsx"
#include "./helpers/createBASEFolderIfNotExists/createBASEFolderIfNotExists.jsx"

function createFoldersTemplates() {
    
    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    createBASEFolderIfNotExists();
    
    createCOLORFolderIfNotExists();
}


