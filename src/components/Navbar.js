import { NavLink } from "react-router-dom";

// styles
import './Navbar.css'

// components
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <div className="navbar">
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
