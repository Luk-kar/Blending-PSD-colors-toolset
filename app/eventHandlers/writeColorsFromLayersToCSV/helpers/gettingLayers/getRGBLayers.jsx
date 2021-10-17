#include "../../../utils/checkIsLayer.jsx"

function getRGBLayers(layers, layersNames) {

    var RBGLayers = [];
    for (var i = 0; i < layersNames.length; i++) {

        if (checkIsLayer (layers, layersNames[i])) {
            try {
                RBGLayers.push(layers.getByName(layersNames[i]));
            }
            catch (e) {
                continue;
            }
        }

    }
    return RBGLayers;
}


