import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import Footer from "./Footer";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students")
        .then(r => r.json())
        .then(setStudents)
      }, [])

    const studentList = students.map(student => (
        <div key={student.id}>
            <li >{student.name}</li>
            <p >Preferred Language: {student.language}</p>
            {/* <p>In Class: </p> */}
        </div>
        ))

    return (
        <main>
            <Nav />
            <div className="Home">
                <h1>Student Roster</h1>
                <ul>
                    {/* ?Add: Each students present state? */}
                    {studentList}
                </ul>
            </div>
            <Outlet context={[students, setStudents]}/>
            <Footer />
        </main>
        
    );
}

export default App;

