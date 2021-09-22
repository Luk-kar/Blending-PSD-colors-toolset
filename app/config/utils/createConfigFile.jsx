#include "./getConfigFile.jsx"

function createConfigFile() {

    var configFile = getConfigFile();

    var configDefaultText = "" +
        "[" + configDefaultValues.fileStructure.title + "]\n" +
        configDefaultValues.fileStructure.color_folder_name.key + " = " + configDefaultValues.fileStructure.color_folder_name.value + "\n" +
        configDefaultValues.fileStructure.base_folder_name.key + " = " + configDefaultValues.fileStructure.base_folder_name.value + "\n" +
        configDefaultValues.fileStructure.layers.key + " = " + configDefaultValues.fileStructure.layers.value + "\n" +
        "[" + configDefaultValues.colorsRGB.title + "]\n" +
        configDefaultValues.colorsRGB.R.key + " = " + configDefaultValues.colorsRGB.R.value + "\n" +
        configDefaultValues.colorsRGB.G.key + " = " + configDefaultValues.colorsRGB.G.value + "\n" +
        configDefaultValues.colorsRGB.B.key + " = " + configDefaultValues.colorsRGB.B.value + "\n";

    configFile.open("w");
    configFile.write(configDefaultText);
    configFile.close();
}
