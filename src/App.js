import "./App.css";
import foto from "./images/foto.jpg";
import { Actress } from "./Actress";
import { Astras } from "./Astras";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showBoobs, setShowBoobs] = useState(false);
  const age = 16;
  const isSersiDominated = true;
  const [fucked, setFucked] = useState(1);
  const actresses = [
    { name: "Anna", ethnicity: "Black", born: 1992 },
    { name: "Daisy", ethnicity: "White", born: 1992 },
    { name: "Kaya", ethnicity: "White", born: 1992 },
    { name: "Immy", ethnicity: "White", born: 1994 },
    { name: "Adria", ethnicity: "Latina", born: 1992 },
    { name: "Souheila", ethnicity: "Arab", born: 1992 },
    { name: "Rahimi", ethnicity: "Arab", born: 1992 },
    { name: "Aurora", ethnicity: "Black", born: 1994 },
    { name: "Una", ethnicity: "White", born: 1994 },
    { name: "Suzy", ethnicity: "Asian", born: 1994 },
  ];

  const increaseFucked = () => {
    setFucked(fucked + 1);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      {/* Show */}
      <button
        onClick={() => {
          setShowBoobs(!showBoobs)
        }}
      >
        Show/Hide
      </button>
      {showBoobs && <h1>My name is Anna Shaffer</h1>}

      <h1></h1>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
      <br />

      {fucked}
      <button onClick={increaseFucked}>increase Fuck</button>
      {actresses.map(
        (actress, index) =>
          //*** Cara Saya ***

          // {return actress.born === 1992 ? (
          //   <Actress
          //     key={index}
          //     name={actress.name}
          //     ethnicity={actress.ethnicity}
          //   />
          // ) : (
          //   ""
          // );}
          // *** Cara youtube ***
          actress.born === 1992 && (
            <Actress
              key={index}
              name={actress.name}
              ethnicity={actress.ethnicity}
            />
          ),
      )}

      <Astras name="Ajak" epithet="The Prime" sex_hierarchy="Submissive" />
      <Astras name="Sersi" epithet="The Alchemist" sex_hierarchy="Submissive" />
      <Astras name="Ikarra" epithet="The Seraph" sex_hierarchy="Dominant" />
      <Astras name="Thena" epithet="The Valkyrie" sex_hierarchy="Dominant" />
      <Astras name="Gilana" epithet="The Titan" sex_hierarchy="Switch" />
      <Astras name="Makkari" epithet="The Voyager" sex_hierarchy="submissive" />
      <Astras name="Kinaya" epithet="The Pulsar" sex_hierarchy="Dominant" />
      <Astras name="Phaesta" epithet="The Architect" sex_hierarchy="Switch" />
      <Astras name="Drusilla" epithet="The Weaver" sex_hierarchy="Dominant" />
      <Astras name="Sprite" epithet="The Trcister" sex_hierarchy="submissive" />

      {age >= 18 ? <h1>OVER AGE </h1> : <h1>UNDER AGE</h1>}
      <h1
        style={{
          color: isSersiDominated ? "pink" : "black",
          backgroundColor: "green",
        }}
      >
        THE COLOR IS PINK
      </h1>

      {isSersiDominated && <img src={foto} alt="sersi dominated" />}
    </div>
  );
}

export default App;
