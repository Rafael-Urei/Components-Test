import "./styles.css";
import { useState } from "react";

export default function App() {
  const [enabled, setEnabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [elements, setElements] = useState([
    "item 1",
    "item 2",
    "item 3",
    "Sushi",
    "Anime",
    "Papua Nova Guiné"
  ]);
  const [value, setValue] = useState("");

  const filteredElements = elements.filter((item) => item.includes(value));

  const handleFilterList = (e) => {
    setEnabled(true);
    setValue(e.target.value);
    setPlaceholder(filteredElements[0]);
  };

  const handleChose = (itemValue) => {
    setEnabled(false);
    if (itemValue) {
      setValue(itemValue);
    }
    setPlaceholder("");
  };

  return (
    <div className="App">
      <div className="box">
        <div className="inputContainer">
          <label>{placeholder}</label>
          <input type="text" value={value} onChange={handleFilterList} />
        </div>
        <div className={!enabled ? "closed" : "opened"}>
          {filteredElements.map((item) => {
            return (
              <div
                className="item"
                value={item}
                onClick={() => handleChose(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
