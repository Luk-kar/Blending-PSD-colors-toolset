function mainMenu() {
    var menu = new Window("dialog", "Read colors from layers");

    var buttonCOLORSFolder = menu.add("button", [0,80,290,101], 'Create template COLORS folder');
    var buttonReadColors = menu.add("button", [0,80,290,101], 'Read colors from layers');
    var buttonAbout = menu.add("button", [0,80,290,101], 'About');
    var buttonClose = menu.add("button", [0,80,290,101], 'Close');

    menu.show();
}