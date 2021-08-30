
function about(mainMenu) {
    var about = new Window("dialog", "About");
    about.alignment = "left";

    var text = 'Instruction:\n' +
    '1. Have folder "COLORS" in the top hierarchy in the PSD file.\n' +
    '2. Have some folders in the "COLORS" folder.\n' +
    '3. In each folder have 3 layers with names: R, G, B.\n' +
    '4. Each layer has in the left upper corner a color sample.\n' +
    '5. Run "Read colors from layers".\n' +
    '6. Find CSV file, where opened PSD file is located.\n' +
    '7. Enjoy.';

    var instruction = about.add("statictext", undefined, text, {multiline: true});
    instruction.alignment = "left";
    instruction.characters = 30;

    var author = about.add("statictext", undefined, "Author:\nKarol Łukaszczyk", {multiline: true});
    author.alignment = "left";

    var repoLink = about.add("statictext", undefined, "Link to project:\nhttps://github.com/Luk-kar/Read_blending_colors", {multiline: true});
    repoLink.alignment = "left";
    repoLink.characters = 40;

    var buttonClose = about.add("button", [0,80,290,101], 'Return');

    buttonClose.onClick = function() {
        about.close();
        mainMenu.show();
    }

    about.show();
}