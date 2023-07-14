function _readVEH(sheet, vehiculo) {
    const data = sheet.getDataRange().getValues();
    const header = data.shift();

    //Buscar tod
    const resultado = data.map((row, indx) => {
        const reduced = header.reduce((accumulator, currentValue, currentIndex) => {
            accumulator[currentValue] = row[currentIndex];
            return accumulator;
        }, {});

        reduced.row = indx + 2;
        return reduced;
    });

    if (vehiculo) {
        return resultado.find((dato) => dato.vehiculo === vehiculo)
    }
    return resultado;
}