import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import './StudentQuizView.css';

function StudentQuizView() {
  return (
    <div className="studentQuizView">
        <Navbar/>
        <div className="Title">
            <h1>Quiz Title</h1>
        </div>
        <div className="TeacherComment">
            <h2>Teacher Comment</h2>
        </div>
        <div className="Comment">
            <span>This is where the teacher comment will be</span>
        </div>
        <div> 
            <div>Quiz will be uploaded below from the instructor</div>
        </div>
    </div>
  )
}

export default StudentQuizView;