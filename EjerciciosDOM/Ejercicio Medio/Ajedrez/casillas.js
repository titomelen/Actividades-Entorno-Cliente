const casillaPar = ["negra", "blanca", "negra", "blanca", "negra", "blanca", "negra", "blanca"];
const casillaImpar = ["blanca", "negra", "blanca", "negra", "blanca", "negra", "blanca", "negra"];
const array = [casillaPar, casillaImpar, casillaPar, casillaImpar, casillaPar , casillaImpar, casillaPar, casillaImpar]

array.map((row) => {
    document.write(
        '<br><br><br>'
      );
  row.map((item) => {
    if (item === "blanca") {
      document.write(
        '<div style="background-color:white;float:left;">&nbsp</div>'
      );
    } else {
      document.write(
        '<div style="background-color:black;float:left;">&nbsp</div>'
      );
    }
  });
});