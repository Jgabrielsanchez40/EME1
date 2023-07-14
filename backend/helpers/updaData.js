function updaData(vehiculo, km, table) {
    const headers = table.getDataRange().getValues().shift();
  
    const datosEncontrados = _readVEH(table, vehiculo);
    const datosObject = km;
  
    const numeroFila = datosEncontrados.row;
  
    for (const key in datosObject) {
      const numeroColumna = headers.indexOf(key) + 1;
      table.getRange(numeroFila, numeroColumna).setValue(datosObject[key]);
    }
  }