import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Convertidor } from "./FuncionConvertidor";

const MainPage = () => {
  const [result, setResult] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Yavin");
  const [convertedValues, setConvertedValues] = useState({
    Yavin: 0,
    Lothal: 0,
    Convenio: 0,
    Hosnian: 0,
    Sith: 0,
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function resultado() {
    setResult(!result);
  }

  useEffect(() => {
    convertirYear();
  }, [result]);

  function convertirYear() {
    let Valores = Convertidor(inputValue, selectedOption);

    setConvertedValues({
      Yavin: Valores.Yavin,
      Lothal: Valores.Lothal,
      Convenio: Valores.Convenio,
      Hosnian: Valores.Hosnian,
      Sith: Valores.Sith,
    });
  }

  function handleInputChange(event) {
    const value = event.target.value;
    // Verificar si el valor ingresado es numérico
    if (/^[+-]?\d*$/.test(value)) {
      setInputValue(value);
    }
  }

  return (
    <>
      <div>Convertor de Año</div>

      <div>
        <input type="text" value={inputValue} onInput={handleInputChange} />
        <>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="Lothal">Calendario Lothal</option>
            <option value="Yavin">Batalla de Yavin</option>
            <option value="Convenio">Convenio Galáctico</option>
            <option value="Hosnian">Contabilidad de Hosnian</option>
            <option value="Sith">Nuevo Imperio Sith</option>
          </select>
        </>
        <button onClick={resultado}> Convertir </button>
      </div>
      <Card
        Yavin={convertedValues.Yavin}
        Lothal={convertedValues.Lothal}
        Convenio={convertedValues.Convenio}
        Hosnian={convertedValues.Hosnian}
        Sith={convertedValues.Sith}
      />
    </>
  );
};

export default MainPage;
