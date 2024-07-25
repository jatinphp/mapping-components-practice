import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function createEntry(entrytxt) {
  return (
    <Entry
      key={entrytxt.id}
      emoji={entrytxt.emoji}
      name={entrytxt.name}
      meaning={entrytxt.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
