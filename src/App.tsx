import React, { Suspense, useMemo, useState } from "react";
import { PluginConfig } from "./Plugins/Types";
import VendaBuilder from "./Plugins/Venda";


function App() {
  const [value, setValue] = useState("sub");
  const [title, setTitle] = useState("");

  const myMatcher = useMemo(
    () => (plugin: PluginConfig) => plugin.value === value,
    [value]
  );

  VendaBuilder.addProps({
    title,
  });

  VendaBuilder.addMatcher(myMatcher);

  const VendaPlugin = VendaBuilder.buildPlugin();

  return (
    <div>
      <h1>Plugin</h1>
      <div>
        <span style={{ marginRight: "8px" }}>Loja:</span>
        <select onChange={(e) => setValue(e.target.value)}>
          <option value="sub">Submarino</option>
          <option value="ame">Americanas</option>
          <option value="mag">Magalu</option>
        </select>
      </div>
      <div style={{ marginTop: "8px" }}>
        <span style={{ marginRight: "8px" }}>Título:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>{VendaPlugin}</Suspense>
    </div>
  );
}

export default App;
