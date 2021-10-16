#include "./getConfigFile.jsx"

function createConfigFile() {

    var configFile = getConfigFile();

    var color_folder = configDefaultValues.fileStructure.color_folder
    var base_folder = configDefaultValues.fileStructure.base_folder;
    var colorsRGB = configDefaultValues.colorsRGB;

    var _ = " = ";

    var configDefaultText = "" +
        "[" + configDefaultValues.fileStructure.title + "]\n" +
        color_folder.name.key + _ + color_folder.name.value + "\n" +
        color_folder.folders.key + _ + color_folder.folders.value + "\n" +
        color_folder.layers.key + _ + color_folder.layers.value + "\n" +
        base_folder.name.key + _ + base_folder.name.value + "\n" +
        "[" + configDefaultValues.colorsRGB.title + "]\n" +
        colorsRGB.R.key + _ + colorsRGB.R.value + "\n" + // todo create number of folder in object
        colorsRGB.G.key + _ + colorsRGB.G.value + "\n" +
        colorsRGB.B.key + _ + colorsRGB.B.value + "\n";

    configFile.open("w");
    configFile.write(configDefaultText);
    configFile.close();
}
