import { useState } from "react";
import { Actress } from "./Actress";
import "./App.css";
import foto from "./images/foto.jpg";

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
  const astras = [
    { name: "Ajak", epithet: "The Prime", sex_hierarchy: "Submissive" },
    { name: "Sersi", epithet: "The Alchemist", sex_hierarchy: "Submissive" },
    { name: "Ikarra", epithet: "The Seraph", sex_hierarchy: "Dominant" }, 
    { name: "Thena", epithet: "The Valkyrie", sex_hierarchy: "Dominant" },
    { name: "Gilana", epithet: "The Titan", sex_hierarchy: "Switch" },
    { name: "Makkari", epithet: "The Voyager", sex_hierarchy: "Switch" },
    { name: "Kinaya", epithet: "The Pulsar", sex_hierarchy: "Dominant" },
    { name: "Phaesta", epithet: "The Architect", sex_hierarchy: "Switch" },
    { name: "Drusilla", epithet: "The Weaver", sex_hierarchy: "Dominant" },
    { name: "Sprite", epithet: "The Trcister", sex_hierarchy:"Submissive" },
  ];

  const increaseFucked = () => {
    setFucked(fucked + 1);
  };

  const decreaseFucked = () => {
    {fucked > 1 && setFucked(fucked-1)};
  };

  const backToOne = () => {
    setFucked(1);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const dominant = () => {
    console.log("Dominant button clicked");
  }



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

      {fucked >= 1 ? <h1>{fucked}</h1> : fucked == 0}
      <br />
      <button onClick={increaseFucked}>Increase Fuck</button>
      <button onClick={decreaseFucked}>Decrease Fuck</button>
      <button onClick={backToOne}>Set to One</button>
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

      <br/>
      <button onClick={() =>{
        console.log("Dominant button clicked");
      }}
      
      style={{ backgroundColor: "red" }}>Dominant</button>
      <button style={{ backgroundColor: "yellow" }}>Switch</button>
      <button style={{ backgroundColor: "green" }}>Submissive</button>
      

      {/* <Astras name="Ajak" epithet="The Prime" sex_hierarchy="Submissive" />
      <Astras name="Sersi" epithet="The Alchemist" sex_hierarchy="Submissive" />
      <Astras name="Ikarra" epithet="The Seraph" sex_hierarchy="Dominant" />
      <Astras name="Thena" epithet="The Valkyrie" sex_hierarchy="Dominant" />
      <Astras name="Gilana" epithet="The Titan" sex_hierarchy="Switch" />
      <Astras name="Makkari" epithet="The Voyager" sex_hierarchy="Switch" />
      <Astras name="Kinaya" epithet="The Pulsar" sex_hierarchy="Dominant" />
      <Astras name="Phaesta" epithet="The Architect" sex_hierarchy="Switch" />
      <Astras name="Drusilla" epithet="The Weaver" sex_hierarchy="Dominant" />
      <Astras name="Sprite" epithet="The Trcister" sex_hierarchy="submissive" /> */}


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
