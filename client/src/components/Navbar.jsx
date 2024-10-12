import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <nav className="navbar">
        <Link to="/">Home Page</Link>| 
        <Link to="/about">About</Link> |
        <Link to="/posts"> Posts</Link>
        </nav>
        </>
    );
}
