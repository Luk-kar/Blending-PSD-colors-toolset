function getDiffrentColors(colorsA, colorsB) {

    var diffrentColors = "";

    for (var i = 0; i < colorsA.length; i++) {
        var AColor = colorsA[i];

        var thereIs = false;
        for (var j = 0; j < colorsB.length; j++) {
            var BColor = colorsB[j];

            if (AColor === BColor) {
                thereIs = true;
                break;

            }
        }

        if (!thereIs) {
            diffrentColors += AColor + " ";
        }
    }

    return diffrentColors;
}
