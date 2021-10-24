#include "./getConfigFile.jsx"

function createConfigFile() {

    var configFile = getConfigFile();

    var fileStructure = configDefaultValues.fileStructure
    var color_folder = configDefaultValues.fileStructure.color_folder
    var base_folder = configDefaultValues.fileStructure.base_folder;
    var colorsRGB = configDefaultValues.colorsRGB;
    var pickerCoords = configDefaultValues.pickerCoords

    var _ = " = ";

    var configDefaultText = "" +
        "[" + fileStructure.title + "]\n" +
        color_folder.name.key + _ + color_folder.name.value + "\n" +
        color_folder.folders.key + _ + color_folder.folders.value + "\n" +
        color_folder.layers.key + _ + color_folder.layers.value + "\n" +
        base_folder.name.key + _ + base_folder.name.value + "\n" +
        "[" + colorsRGB.title + "]\n" +
        colorsRGB.R.key + _ + colorsRGB.R.value + "\n" +
        colorsRGB.G.key + _ + colorsRGB.G.value + "\n" +
        colorsRGB.B.key + _ + colorsRGB.B.value + "\n" +
        "[" + pickerCoords.title + "]\n" +
        pickerCoords.R.key + _ + pickerCoords.R.value + "\n" +
        pickerCoords.G.key + _ + pickerCoords.G.value + "\n" +
        pickerCoords.B.key + _ + pickerCoords.B.value + "\n";

    configFile.open("w");
    configFile.write(configDefaultText);
    configFile.close();
}
