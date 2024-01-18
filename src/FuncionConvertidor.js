export function Convertidor(inputValue, selectedOption) {
  const conversionMap = {
    Yavin: { Yavin: 0, Lothal: 3277, Convenio: -36, Hosnian: 7977, Sith: -35 },
    Convenio: { Yavin: 36, Lothal: 3313, Convenio: 0, Hosnian: 8013, Sith: -1 },
    Sith: { Yavin: 35, Lothal: 3312, Convenio: -1, Hosnian: 8012, Sith: 0 },
    Lothal: {
      Yavin: -3277,
      Lothal: 0,
      Convenio: -3313,
      Hosnian: 4700,
      Sith: -3312,
    },
    Hosnian: {
      Yavin: -7977,
      Lothal: -4700,
      Convenio: -8013,
      Hosnian: 0,
      Sith: -8012,
    },
  };

  const datacionMap = {
    Yavin: { Neg: " ABY", Pos: " DBY" },
    Convenio: { Neg: " ACG", Pos: " DCG" },
    Sith: { Neg: " AIS", Pos: " DIS" },
    Lothal: " AL",
    Hosnian: " C.R.C.",
  };

  const differences = conversionMap[selectedOption];

  if (!differences) {
    // Manejar el caso en el que la opción no coincide con ninguna de las definidas
    return {};
  }

  function formatearNumero(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const objConvertYears = {};
  for (const key in differences) {
    let result,
      number = Number(inputValue) + differences[key];
    if (number < 0 && (key == "Yavin" || key == "Sith" || key == "Convenio")) {
      result = formatearNumero(Math.abs(number)) + datacionMap[key]["Neg"];
    } else if (
      number >= 0 &&
      (key == "Yavin" || key == "Sith" || key == "Convenio")
    ) {
      result = formatearNumero(Math.abs(number)) + datacionMap[key]["Pos"];
    } else {
      result = formatearNumero(number) + datacionMap[key];
    }

    objConvertYears[key] = result;
  }

  return objConvertYears;
}
