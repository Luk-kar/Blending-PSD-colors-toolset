#include "../eventHandlers/createFoldersTemplates/createFoldersTemplates.jsx"
#include "../eventHandlers/setLeftUpperPixelInCOLORS/setLeftUpperPixelInCOLORS.jsx"
#include "../eventHandlers/writeColorsFromLayersToCSV/writeColorsFromLayersToCSV.jsx"
#include "../eventHandlers/setColorFromCSVFile/setColorFromCSVFile.jsx"
#include "../eventHandlers/BASELayersIntoPNGs/BASELayersIntoPNGs.jsx"
#include "./about.jsx"

function mainMenu() {
    var menu = new Window("dialog", "Read blending colors");

    var buttonFoldersTemplates = menu.add("button", [0,80,290,101], 'Create folders templates');
    var buttonSetLeftUpperPixelInCOLORS = menu.add("button", [0,80,290,101], 'Set left upper pixel in COLORS');
    var buttonReadColors = menu.add("button", [0,80,290,101], 'Write colors from layers to CSV file');
    var buttonSetColors = menu.add("button", [0,80,290,101], 'Set colors from CSV file');
    var buttonBASEToPNGs = menu.add("button", [0,80,290,101], 'Transform BASE layers into pngs');
    var buttonAbout = menu.add("button", [0,80,290,101], 'About');
    var buttonClose = menu.add("button", [0,80,290,101], 'Close');

    buttonFoldersTemplates.onClick = function() {
        menu.close();
        createFoldersTemplates();
    }

    buttonSetLeftUpperPixelInCOLORS.onClick = function() {
        menu.close();
        setLeftUpperPixelInCOLORS();
    }

    buttonReadColors.onClick = function() {
        menu.close();
        writeColorsFromLayersToCSV();
    }

    buttonSetColors.onClick = function() {
        menu.close();
        setColorFromCSVFile();
    }

    buttonBASEToPNGs.onClick = function() {
        menu.close();
        BASELayersIntoPNGs();
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