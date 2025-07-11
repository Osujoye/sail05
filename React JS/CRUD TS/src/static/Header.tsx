import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">
        <nav>Home</nav>
      </NavLink>
      <NavLink to="/about">
        <nav>About</nav>
      </NavLink>
      <NavLink to="/services">
        <nav>Services</nav>
      </NavLink>
    </div>
  );
};

export default Header;
