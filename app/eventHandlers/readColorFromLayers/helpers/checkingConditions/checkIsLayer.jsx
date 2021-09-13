function checkIsLayer(layers, layerName) {

    for (var j = 0; j < layers.length; j++) {
        if (layers[j].name === layerName) {
            return true;
        }
    }

    return false;
}
