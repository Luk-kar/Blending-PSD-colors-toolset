#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

function readFoldersInColorFolder() {

    var folders = getConfigValue(configDefaultValues.fileStructure.color_folder.folders.key).split(",")
    return folders;
}