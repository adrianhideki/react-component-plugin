import { VendaPluginProps } from "./Types";
import { PluginBuilder } from "..";

const VendaBuilder = new PluginBuilder<VendaPluginProps>();

VendaBuilder.addConfig({
  id: "submarino",
  value: "sub",
  path: "./Venda/Submarino",
});

VendaBuilder.addConfig({
  id: "americanas",
  value: "ame",
  path: "./Venda/Americanas",
});

VendaBuilder.addConfig({
  id: "magalu",
  value: "mag",
  path: "./Venda/Magalu",
});

export default VendaBuilder;
