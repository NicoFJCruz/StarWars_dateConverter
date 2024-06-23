import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <section className="card">
      <div>
        <p className="name"> Calendario del Convenio Galáctico: </p>{" "}
            <p className="content"> {props.Convenio}</p>
        <p className="name"> Calendario del Nuevo Imperio Sith: </p>
            <p className="content"> {props.Sith}</p>
        <p className="name"> Calendario de la Batalla de Yavin: </p>
            <p className="content"> {props.Yavin}</p>
        <p className="name"> Calendario de la Formación del Imperio: </p>
            <p className="content"> {props.Imperio}</p>
        <p className="name"> Calendario de Naboo: </p>
            <p className="content"> {props.Naboo}</p>
        <p className="name"> Calendario Reforma de Ruusan: </p>
            <p className="content"> {props.Ruusan}</p>  
        <p className="name"> Calendario de Lothal: </p>
            <p className="content"> {props.Lothal}</p>
        <p className="name"> Calendario Redescubrimiento de Kaas: </p>
            <p className="content"> {props.Kaas}</p>
        <p className="name"> Calendario de Recuento de Coruscant: </p>
            <p className="content"> {props.Hosnian}</p>
        <p className="name"> Calendario Acuerdo de Domanción: </p>
            <p className="content"> {props.Doman}</p>  
      </div>
    </section>
  );
};
export default Card;
