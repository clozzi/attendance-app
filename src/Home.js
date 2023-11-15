import { useOutletContext } from "react-router-dom";

function Home() {
    const students = useOutletContext();
    const studentList = students.map(student => (
        <li key={student.id}>{student.name}</li>
        ))

    return (
        <div className="Home">
        <h1>Student Roster HomePage</h1>
        <ul>
            {studentList}
        </ul>
        </div>
    );
}

export default Home;