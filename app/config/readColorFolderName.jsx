#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

function readColorFolderName() {

    var searchedPhrase = configDefaultValues.fileStructure.color_folder_name.key;

    return getConfigValue(searchedPhrase);
}


