import { useOutletContext } from "react-router-dom";

function Home() {
    const [students, addStudent] = useOutletContext();

    const studentList = students.map(student => (
            <li key={student.id}>{student.name}<hr /></li>
        ))

    return (
        <>
        <h1>Home Page</h1>
        <div className="Home">
                <h3>Student Roster</h3>
                <ol>
                    {studentList}
                </ol>
            </div>
        </>
    )
};

export default Home;