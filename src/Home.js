import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import Footer from "./Footer";

function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students")
        .then(r => r.json())
        .then(setStudents)
      }, [])

    const studentList = students.map(student => (
        <div>
            <li key={student.id}>{student.name}</li>
            {/* <p>In Class: </p> */}
        </div>
        ))

    return (
        <main>
            <header>
                <Nav />
            </header>
            <div className="Home">
                <h1>Student Roster HomePage</h1>
                <ul>
                    {/* ?Add: Each students present state? */}
                    {studentList}
                </ul>
            </div>
            <Outlet context={students}/>
            <Footer />
        </main>
        
    );
}

export default Home;