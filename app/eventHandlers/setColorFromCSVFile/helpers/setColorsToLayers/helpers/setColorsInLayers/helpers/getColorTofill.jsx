#include "../../../../utils/isHexColor.jsx"

function getColorTofill(color) {
    var myColor = new SolidColor();

    if (color instanceof "undefined" || !isHexColor(color)) {
        myColor.rgb.hexValue = "000000";
    } else {
        myColor.rgb.hexValue = color;
    }

    return myColor;
}
