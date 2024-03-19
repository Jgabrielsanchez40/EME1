function _readVEH(sheet, Activo) {
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

    if (Activo) {
        return resultado.filter((dato) => dato.Activo === Activo)
    }
    return resultado;
}

function _readPlaca(sheet, vehiculo) {
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
        return resultado.filter((dato) => dato.vehiculo === vehiculo)
    }
    return resultado;
}

function _readVEHFalla(sheet, Activo) {
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

    if (Activo) {
        return resultado.filter((dato) => dato.vehiculo === Activo)
    }
    return resultado;
}

function _readVEHFallaReparada(sheet, vehiculo) {
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
        return resultado.filter((dato) => dato.vehiculo === vehiculo && dato.reparado != 'Si')
    }
    return resultado;
}