import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/" style={{padding: 5}}>Home</NavLink>
            <NavLink to="/about" style={{padding: 5}}>About</NavLink>
            <NavLink to="/attendance" style={{padding: 5}}>Attendance</NavLink>
        </nav>
    )
}

export default Nav