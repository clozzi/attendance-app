// update state of students to display "current status" as present or absent
// add new student to class (w/ present of true) which updates state of students on homepage


function StudentCard({ student, handleAttendance, present }) {

    return (
        <div>
            <li>{student.name}</li>
            <form>
                <label htmlFor={student.id}>Present?</label>
                <input type="checkbox" id={student.id} onChange={handleAttendance} checked={present} />
                {/* NEED: separate checked property...currently same shared by all students */}
            </form>
        </div>
    )
}

export default StudentCard;