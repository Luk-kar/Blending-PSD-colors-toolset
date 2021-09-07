#include "../eventHandlers/readColorFromLayers/readColorFromLayers.jsx"
#include "../eventHandlers/createFoldersTemplates/createFoldersTemplates.jsx"
#include "./about.jsx"

function mainMenu() {
    var menu = new Window("dialog", "Read blending colors");

    var buttonFoldersTemplates = menu.add("button", [0,80,290,101], 'Create folders templates');
    var buttonReadColors = menu.add("button", [0,80,290,101], 'Read colors from layers');
    var buttonAbout = menu.add("button", [0,80,290,101], 'About');
    var buttonClose = menu.add("button", [0,80,290,101], 'Close');

    buttonFoldersTemplates.onClick = function() {
        menu.close();
        createFoldersTemplates();
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