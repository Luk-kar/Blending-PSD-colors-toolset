function convertValueStringToInt(_unitValue) {

    var string = _unitValue.toString();
    var nonDecimal = /\D/g;
    return string.replace(nonDecimal, '');
}
