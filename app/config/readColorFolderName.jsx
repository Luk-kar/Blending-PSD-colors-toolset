#include "./utils/getConfigValue.jsx"
#include "./configDefaultValues.jsx"

alert(readColorFolderName());

function readColorFolderName() {

    var searchedPhrase = configDefaultValues.fileStructure.color_folder_name.key;

    return getConfigValue(searchedPhrase);
}


