import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Convertidor } from "./FuncionConvertidor";

const MainPage = () => {
  const [result, setResult] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Convenio");
  const [convertedValues, setConvertedValues] = useState({
    Yavin: 0,
    Lothal: 0,
    Convenio: 0,
    Hosnian: 0,
    Sith: 0,
    Imperio: 0,
    Naboo: 0,
    Kaas: 0,
    Ruusan: 0,
    Doman: 0,
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
      Imperio: Valores.Imperio,
      Naboo: Valores.Naboo,
      Kaas: Valores.Kaas,
      Ruusan: Valores.Ruusan,
      Doman: Valores.Doman,
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
    <section className="container">
      <h1 id="title">Convertor de Año</h1>

      <div className="convertor">
        <div className="optionsContainer">
          <input
            id="inputText"
            type="text"
            value={inputValue}
            onInput={handleInputChange}
          />

          <select
            id="selectedOption"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="Convenio">Calendario del Convenio Galáctico</option>
            <option value="Sith">Calendario del Nuevo Imperio Sith</option>
            <option value="Yavin">Calendario de la Batalla de Yavin</option>
            <option value="Imperio">
              Calendario de la Formación del Imperio
            </option>
            <option value="Naboo">Calendario de Naboo</option>
            <option value="Ruusan">Calendario Reforma de Ruusan</option>
            <option value="Lothal">Calendario de Lothal</option>
            <option value="Kaas">Calendario Redescubrimiento de Kaas</option>
            <option value="Hosnian">Calendario de Recuento de Coruscant</option>
            <option value="Doman">Calendario Acuerdo de Domanción</option>
          </select>
        </div>

        <button id="convertButton" onClick={resultado}>
          Mostrar resultados
        </button>
      </div>

      <Card
        Yavin={convertedValues.Yavin}
        Lothal={convertedValues.Lothal}
        Convenio={convertedValues.Convenio}
        Hosnian={convertedValues.Hosnian}
        Sith={convertedValues.Sith}
        Naboo={convertedValues.Naboo}
        Imperio={convertedValues.Imperio}
        Kaas={convertedValues.Kaas}
        Ruusan={convertedValues.Ruusan}
        Doman={convertedValues.Doman}
      />
    </section>
  );
};

export default MainPage;
