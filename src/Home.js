import { useOutletContext } from "react-router-dom";

function Home() {
    const [students, addStudent] = useOutletContext();
    console.log(addStudent)

    const studentList = students.map(student => (
            <li key={student.id}>{student.name} <br /><img src={student.image} alt="student" style={{height: 100, width: 100}}></img></li>
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