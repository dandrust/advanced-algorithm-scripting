function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  function altToOrbitPeriod(alt) {

    return Math.round(
      2*Math.PI*Math.sqrt(Math.pow((earthRadius)+alt, 3)/(GM)));
  }
  arr.forEach(function(val, i){

    val.orbitalPeriod = altToOrbitPeriod(val.avgAlt);
    delete val.avgAlt;

  });

  return arr;
}
