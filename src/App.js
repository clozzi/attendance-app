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

    

    return (
        <main>
            <Nav />
            <Outlet context={[students, setStudents]}/>
            <Footer />
        </main>
        
    );
}

export default App;

