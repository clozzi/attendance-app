import { useOutletContext } from "react-router-dom";

function AttendanceForm() {
    const students = useOutletContext();

    return (
        <div>
            <h1>Attendance Form</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                    </tr>
                )
                )}
            </table>
            
        </div>
    )
}

export default AttendanceForm;