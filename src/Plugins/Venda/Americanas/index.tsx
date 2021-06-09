import React from "react";
import { VendaPluginProps } from "../Types";

const Americanas = ({ title }: VendaPluginProps) => {
  return (
    <div>
      <h2 style={{color: 'red'}}>Americanas - {title}</h2>
      <div>A melhor loja? Talvez nas américas!</div>
    </div>
  );
};

export default Americanas;
