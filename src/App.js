import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
    .then(r => r.json())
    .then(setStudents)
  }, [])

  return (
      <>
        <header>
          <Nav />
        </header>
        <Outlet context={students}/>
      </>
  )
}

export default App;