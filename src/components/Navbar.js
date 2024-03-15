import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Games">Games</Link>
            </li>
            <li>
                <Link to="/Achievements">Achievements</Link>
            </li>
            <li>
                <Link to="/Planner">Planner</Link>
            </li>
        </div>
    );
}
export default navbar;