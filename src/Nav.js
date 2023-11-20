import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <NavLink to="/home" style={({isActive}) => ({
                    padding: 5,
                    color: isActive ? '#003300' : '#6699ff',
                    background: isActive ? '#6699ff' : '#e6f2ff',
                })}>Home</NavLink>
                <NavLink to="/about" style={({isActive}) => ({
                    padding: 5,
                    color: isActive ? '#003300' : '#6699ff',
                    background: isActive ? '#6699ff' : '#e6f2ff',
                })}>About</NavLink>
                <NavLink to="/newStudentForm" style={({isActive}) => ({
                    padding: 5,
                    color: isActive ? '#003300' : '#6699ff',
                    background: isActive ? '#6699ff' : '#e6f2ff',
                })}>New Student</NavLink>
            </nav>
        </header>
        
    )
}

export default Nav