import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme"

// styles
import './Navbar.css'

// components
import SearchBar from "./SearchBar";

export default function Navbar() {
    const { color } = useTheme()

    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <NavLink to="/" className="brand">
                    <h1>Recipe App</h1>
                </NavLink>
                <SearchBar />
                <NavLink to="/create">Create Recipe</NavLink>
            </nav>
        </div>
    )
}
