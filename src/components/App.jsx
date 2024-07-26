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

const newEmojiPedia = emojipedia.map(function (entryt) {
  var desc = entryt.meaning;
  return desc.substring(0, 100);
});

console.log(newEmojiPedia);

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
