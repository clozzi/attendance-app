import { useOutletContext } from "react-router-dom";

function About() {
    const [students, addStudent] = useOutletContext();
    console.log(addStudent)

    const studentList = students.map(student => (
        <li key={student.id}>{student.name}<br />Preferred Language: {student.language}</li>
    ))

    return (
        <>
            <h1>About</h1>
            <h3>Here you can find the preferred languages of your students.</h3>
            <ol>
                {studentList}
            </ol>
        </>
    )
};

export default About;