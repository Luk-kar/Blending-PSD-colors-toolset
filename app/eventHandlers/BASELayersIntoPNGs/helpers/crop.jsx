function crop(data) {
    if (data.deleteCropped == undefined)
        data.deleteCropped = true; // default value

    var desc = new ActionDescriptor();
    var descRectangle = new ActionDescriptor();
    descRectangle.putUnitDouble(charIDToTypeID('Top '), charIDToTypeID('#Pxl'), data.top);
    descRectangle.putUnitDouble(charIDToTypeID('Left'), charIDToTypeID('#Pxl'), data.left);
    descRectangle.putUnitDouble(charIDToTypeID('Btom'), charIDToTypeID('#Pxl'), data.bottom);
    descRectangle.putUnitDouble(charIDToTypeID('Rght'), charIDToTypeID('#Pxl'), data.right);
    desc.putObject(charIDToTypeID('T   '), charIDToTypeID('Rctn'), descRectangle);
    desc.putUnitDouble(charIDToTypeID('Angl'), charIDToTypeID('#Ang'), 0.000000);
    desc.putBoolean(charIDToTypeID('Dlt '), data.deleteCropped);
    executeAction(charIDToTypeID('Crop'), desc, DialogModes.NO);
}
