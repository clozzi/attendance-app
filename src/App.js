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
            <h3 style={{
                color: "#003300", 
                backgroundColor: "#6699ff", 
                textShadow: "2px 2px 8px #e6f2ff"
                }}>
                Click on any of the links above to begin exploring your student roster!
            </h3>
            <Outlet context={[students, addStudent]}/>
            <Footer />
        </main>
        
    );
}

export default App;

