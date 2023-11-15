import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to="/home" style={{padding: 5}}>Home</NavLink>
                <NavLink to="/about" style={{padding: 5}}>About</NavLink>
                <NavLink to="/newStudentForm" style={{padding: 5}}>New Student</NavLink>
            </nav>
        </header>
        
    )
}

export default Nav