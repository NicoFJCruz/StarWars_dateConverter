import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <section className="card">
      <div>
        <p className="name"> Calendario Estándar Galáctico: </p>{" "}
            <p className="content"> {props.Yavin}</p>
        <p className="name"> Calendario Convenio Galáctico: </p>{" "}
            <p className="content"> {props.Convenio}</p>
        <p className="name"> Contabilidad Imperio Sith: </p>{" "}
            <p className="content"> {props.Sith}</p>
        <p className="name"> Calendario Lothal: </p>{" "}
            <p className="content"> {props.Lothal}</p>
        <p className="name"> Contabilidad de Hosnian: </p>{" "}
            <p className="content"> {props.Hosnian}</p>
      </div>
    </section>
  );
};

export default Card;
