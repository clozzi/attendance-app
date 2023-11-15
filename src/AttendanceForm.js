import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "./StudentCard";

function AttendanceForm() {
    const students = useOutletContext();
    const [present, setPresent] = useState(false);

    function handleAttendance(e) {
        setPresent(e.target.value)
    }

    return (
        <div>
            <h1>Attendance Form</h1>
            <ol>
                {students.map((student) => (
                    <StudentCard student={student} handleAttendance={handleAttendance} present={present} />
            ))}
            </ol>
        </div>
    )
}

export default AttendanceForm;