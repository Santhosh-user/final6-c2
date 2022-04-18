import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [flip, setFlip] = useState(false);
  return (
    <div className="App">
      <button
        className="togglebtn"
        onClick={() => {
          setFlip(!flip);
        }}
      >
        {flip ? "Add a new student" : "go to students list"}
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {flip ? <AddStudent /> : <ShowStudents />}
    </div>
  );
}

export default App;
