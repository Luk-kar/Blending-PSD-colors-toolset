#include "../eventHandlers/createFoldersTemplates/createFoldersTemplates.jsx"
#include "../eventHandlers/setLeftUpperPixelInCOLORS/setLeftUpperPixelInCOLORS.jsx"
#include "../eventHandlers/writeColorsFromLayersToCSV/writeColorsFromLayersToCSV.jsx"
#include "../eventHandlers/setColorFromCSVFile/setColorFromCSVFile.jsx"
#include "../eventHandlers/BASELayersIntoPNGs/BASELayersIntoPNGs.jsx"
#include "../eventHandlers/numerateColorsFolders/numerateColorsFolders.jsx"
#include "../config/read/readColorFolderName.jsx"
#include "./about.jsx"

function mainMenu() {
    var menu = new Window("dialog", "Blending colors - tools");

    var buttonsDescriptions = {
        readColors: 'Write colors from layers to CSV file',
        setColors: 'Set colors from CSV file',
        BASEToPNGs: 'Transform BASE layers into pngs',
        foldersTemplates: 'Create folders templates',
        setLeftUpperPixelInCOLORS: 'Set left upper pixel in ' + readColorFolderName() + ' folder',
        buttonNumerateFoldersInColors: 'Numerate folders in ' + readColorFolderName() + ' folder',
        About: 'About',
        Close: 'Close'
    }

    var buttonReadColors = menu.add("button", [0,80,290,101], buttonsDescriptions.readColors);
    var buttonSetColors = menu.add("button", [0,80,290,101], buttonsDescriptions.setColors);
    var buttonBASEToPNGs = menu.add("button", [0,80,290,101], buttonsDescriptions.BASEToPNGs);
    var buttonFoldersTemplates = menu.add("button", [0,80,290,101], buttonsDescriptions.foldersTemplates);
    var buttonSetLeftUpperPixelInCOLORS = menu.add("button", [0,80,290,101], buttonsDescriptions.setLeftUpperPixelInCOLORS);
    var buttonNumerateFoldersInColors = menu.add("button", [0,80,290,101], buttonsDescriptions.buttonNumerateFoldersInColors);
    var buttonAbout = menu.add("button", [0,80,290,101], buttonsDescriptions.About);
    var buttonClose = menu.add("button", [0,80,290,101], buttonsDescriptions.Close);

    buttonFoldersTemplates.onClick = function() {
        menu.close();
        createFoldersTemplates();
    }

    buttonSetLeftUpperPixelInCOLORS.onClick = function() {
        menu.close();
        setLeftUpperPixelInCOLORS();
    }

    buttonNumerateFoldersInColors.onClick = function() {
        menu.close();
        numerateColorsFolders();
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
        about(menu, buttonsDescriptions);
    }

    buttonClose.onClick = function() {
        menu.close();
    }

    menu.show();
}