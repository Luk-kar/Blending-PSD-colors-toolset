#include "../../../../../../../../config/read/utils/getConfigPath.jsx"
#include "../../../../../utils/getFullActivePSDPath.jsx"

function convertIntoCSVValues(diffrentLayersInPSD) {

    var diffrentLayersInTitle = "\n\ndiffrent layers in PSD compare to config file\n" +
        "PSD," + getFullActivePSDPath() + "\n" +
        "config CSV," + getConfigPath() + "\n";
    var diffrentLayersInColumns = "folder, layers\n";

    return diffrentLayersInTitle + diffrentLayersInColumns + diffrentLayersInPSD;
}
