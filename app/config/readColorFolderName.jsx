#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

function readColorFolderName() {

    var searchedPhrase = configDefaultValues.fileStructure.color_folder.name.key;

    return getConfigValue(searchedPhrase);
}