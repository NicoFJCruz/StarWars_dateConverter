export function Convertidor(inputValue, selectedOption) {
  console.log(selectedOption);
  const conversionMap = {
    Yavin: { Yavin: 0, Lothal: 3277, Convenio: -36, Hosnian: 7977, Sith: -35 },
    Convenio: { Yavin: 36, Lothal: 3313, Convenio: 0, Hosnian: 8013, Sith: -1 },
    Sith: { Yavin: 35, Lothal: 3312, Convenio: 1, Hosnian: 8012, Sith: 0 },
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

  const differences = conversionMap[selectedOption];

  if (!differences) {
    // Manejar el caso en el que la opción no coincide con ninguna de las definidas
    return {};
  }

  const objConvertYears = {};
  for (const key in differences) {
    objConvertYears[key] = Number(inputValue) + differences[key];
  }

  return objConvertYears;
}
