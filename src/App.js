import './App.css';
import Navbar from "./Components/Navbar";
import Gradebook from "./Components/Gradebook"
import CreateLesson from "./Components/createLesson"
import React, { useState } from "react";
import StudentQuizView from "./Components/StudentQuizView"

function App() {
  const [CreateLessonOpen, setCreateLessonOpen] = useState(false);

  return (
    <div className="App">
          <Gradebook/>
      <h1>button to open create lesson overlay</h1>
      <button className="openModalBtn" onClick={() => {setCreateLessonOpen(true);}}>Open</button>
      {CreateLessonOpen && <CreateLesson setOpenCreateLesson={setCreateLessonOpen} />}
    </div>
  );
}

export default App;