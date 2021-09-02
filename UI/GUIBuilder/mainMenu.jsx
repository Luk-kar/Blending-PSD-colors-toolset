#include "../eventHandlers/readColorFromLayers.jsx"
#include "../eventHandlers/createCOLORSFolderTemplate.jsx"
#include "./about.jsx"

function mainMenu() {
    var menu = new Window("dialog", "Read blending colors");

    var buttonCOLORSFolder = menu.add("button", [0,80,290,101], 'Create template COLORS folder');
    var buttonReadColors = menu.add("button", [0,80,290,101], 'Read colors from layers');
    var buttonAbout = menu.add("button", [0,80,290,101], 'About');
    var buttonClose = menu.add("button", [0,80,290,101], 'Close');

    buttonCOLORSFolder.onClick = function() {
        menu.close();
        createCOLORSFolderTemplate();
    }

    buttonReadColors.onClick = function() {
        menu.close();
        readColorFromLayers();
    }

    buttonAbout.onClick = function() {
        menu.close();
        about(menu);
    }

    buttonClose.onClick = function() {
        menu.close();
    }

    menu.show();
}