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

    function addStudent(newStudent) {
        setStudents([...students, newStudent])
    }

    return (
        <main>
            <Nav />
            <Outlet context={[students, addStudent]}/>
            <Footer />
        </main>
        
    );
}

export default App;

