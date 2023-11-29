import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function About() {
    const [students, addStudent] = useOutletContext();
    const [displayStudents, setDisplayStudents] = useState('');

    const studentList = students.map(student => (
        <li key={student.id}>{student.name}<br />Preferred Language: {student.language}<br />Learning Style: {student.learningStyle}</li>
    ))

    function handleFilter(e) {
     if (e.target.value === "") {
        setDisplayStudents(studentList)
     } else {
        const filteredStudents = students.filter(student => student.language === e.target.value)
        const mapFilterStudents = filteredStudents.map(student => (
            <li key={student.id}>{student.name}<br />Preferred Language: {student.language}<br />Learning Style: {student.learningStyle}</li>
        ))
        setDisplayStudents(mapFilterStudents)
     }
    }

    return (
        <>
            <h1>About</h1>
            <h3>Here you can track general information for your students.</h3>
            <label>Sort Students by Language</label>
            <br />
            <select onChange={handleFilter}>
                <option value="">Select Language</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Spoken">Spoken</option>
            </select>
            <ol>
                {displayStudents}
            </ol>
        </>
    )
};

export default About;