import { Link, NavLink } from "react-router-dom";
import '../Header/Header.css'


const Header = () => {
    return (
        <div>
            
            <nav>
                <span>My website</span>
                <NavLink to="/">Home</NavLink>
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/about">About</NavLink>
                
                <NavLink to="/contact">Contact</NavLink>
                
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/posts">Posts</NavLink>
                {/* <Link to="/posts" >Posts</Link> */}
                
                

               
            </nav>
            
        </div>
    );
};

export default Header;