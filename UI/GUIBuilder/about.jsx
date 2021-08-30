
function about(mainMenu) {
    var about = new Window("dialog", "About");

    var buttonClose = about.add("button", [0,80,290,101], 'Return');

    buttonClose.onClick = function() {
        about.close();
        mainMenu.show();
    }

    about.show();
}