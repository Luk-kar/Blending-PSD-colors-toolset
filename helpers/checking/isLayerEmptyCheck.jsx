function isLayerEmptyCheck(layer) {

    var LayerBounds = layer.bounds;

    if (LayerBounds[0] === "0 px" && LayerBounds[1] === "0 px" && LayerBounds[2] === "0 px" && LayerBounds[3] === "0 px") {
        return true;
    } else {
        return false;
    }
}
