import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

const Header = () => {
    const {theme, toggleTheme} = useThemeContext()
    
    return (
        <Header>
            <button onClick={toggleTheme}>Current Theme is {theme}</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/create'}>Create Page</Link>
        </Header>
    )
}

export default Header;