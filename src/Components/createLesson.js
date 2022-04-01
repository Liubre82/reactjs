import React from "react";
import "./createLesson.css";


function CreateLesson({ setOpenCreateLesson }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenCreateLesson(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Create Lesson</h1>
        </div>
        <div className="body">
          <p>You can create lesson here by selecting the Scene type and Display View</p>
        </div>
        <div className="dropDownTitle">
          <h2>Scene Display(s)</h2>
        </div>
        <div className="dropDown">
            <select>
              <option value="video">Video</option>
              <option value="text">Text</option>
              <option value="quiz">Quiz</option>
              <option value="puzzle">Puzzle</option>
              <option value="videoQuiz">Video, Quiz</option>
              <option value="textQuiz">Text, Quiz</option>
              <option value="videoQuiz">Video, Puzzle</option>
              <option value="textPuzzle">Text, Puzzle</option>
              <option value="videoQuizText">Video, Quiz, Text</option>
              <option value="videoQuizPuzzle">Video, Quiz, Puzzle</option>
              <option value="videoQuizTextPuzzle">Video, Quiz, Text, Puzzle</option>
            </select>
        </div>
        <div className="footer">
          <button onClick={() =>{ }}>Create Lesson</button>
        </div>
      </div>
    </div>
  );
}

export default CreateLesson;