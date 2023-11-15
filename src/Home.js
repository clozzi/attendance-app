import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";

function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students")
        .then(r => r.json())
        .then(setStudents)
      }, [])

    const studentList = students.map(student => (
        <li key={student.id}>{student.name}</li>
        ))

    return (
        <main>
            <header>
                <Nav />
            </header>
            <div className="Home">
                <h1>Student Roster HomePage</h1>
                <ul>
                    {studentList}
                </ul>
            </div>
            <Outlet context={students}/>
        </main>
        
    );
}

export default Home;