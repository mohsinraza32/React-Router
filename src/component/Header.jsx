import { Link } from 'react-router-dom'


const Header = () =>{
    return(
        <>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        </>
    )
}


export default Header;