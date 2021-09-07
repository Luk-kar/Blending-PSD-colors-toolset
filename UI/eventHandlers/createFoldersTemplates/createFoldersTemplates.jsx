#include "../utils/isActiveDocument.jsx"
#include "./createCOLORFolderIfNotExists.jsx"
#include "./createBASEFolderIfNotExists.jsx"
#include "./createCOLORFolderIfNotExists.jsx"

function createFoldersTemplates() {
    
    if(!isActiveDocument()) {
        alert("You do not have any opened file!");
        return; //abort program
    }

    createBASEFolderIfNotExists();
    
    createCOLORFolderIfNotExists();
}


