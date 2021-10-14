function isHexColor(color) {
    var matchHexColor = /^(?:[0-9a-fA-F]{3}){1,2}$/g; // https://regex101.com/r/MndtsX/1
    return Boolean(color.match(matchHexColor));
}
