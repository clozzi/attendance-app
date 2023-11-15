import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "./StudentCard";

function AttendanceForm() {
    const students = useOutletContext();
    const [present, setPresent] = useState(false);
    // Should present state live in Home?
    // and if so, how about this handleAtt function?

    // ...no right? because Im sending it down to studentcard

    function handleAttendance(e) {
        setPresent(e.target.value)
    }

    return (
        <aside>
            <h1>Attendance Form</h1>
            <ol>
                {students.map((student) => (
                    <StudentCard student={student} handleAttendance={handleAttendance} present={present} />
            ))}
            </ol>
            {/* Add (POST) student to roster here */}
        </aside>
    )
}

export default AttendanceForm;