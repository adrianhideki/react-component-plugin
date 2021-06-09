import React from "react";
import { VendaPluginProps } from "../Types";

const Submarino = ({ title }: VendaPluginProps) => {
  return (
    <div>
      <h2 style={{color: 'blue'}}>Submarino - {title}</h2>
      <div>
        A melhor loja? Talvez debaixo d'água!
      </div>
    </div>
  );
};

export default Submarino;
