import React from "react";
import { SimpsonFamily } from "./components/Simpsons";
import { PersonType } from "./types/person";

function App() {
  const data: PersonType[] = [
    { name: "Homer Simpson", age: 39 },
    { name: "Marge Simpson", age: 36 },
    { name: "Bart Simpson", age: 10 },
    { name: "Lisa Simpson", age: 8 },
    { name: "Maggie Simpson", age: 1 },
  ];

  return (
    <div>
      <SimpsonFamily members={data} />
      {/* <AgeAverage /> */}
    </div>
  );
}

export default App;
