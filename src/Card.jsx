import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <section>
      <div>
        <p> Calendario Estándar Galáctico: {props.Yavin}</p>
        <p> Calendario Convenio Galáctico: {props.Convenio}</p>
        <p> Contabilidad Imperio Sith: {props.Sith}</p>
        <p> Calendario Lothal: {props.Lothal}</p>
        <p> Contabilidad de Hosnian: {props.Hosnian}</p>
      </div>
    </section>
  );
};

export default Card;
