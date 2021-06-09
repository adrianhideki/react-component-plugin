import React from "react";
import { VendaPluginProps } from "../Types";

const Magalu = ({ title }: VendaPluginProps) => {
  return (
    <div>
      <h2 style={{color: 'lightblue'}}>Magalu - {title}</h2>
      <div>
        A melhor loja? Talvez a melhor vendedora!
      </div>
    </div>
  );
};

export default Magalu;
