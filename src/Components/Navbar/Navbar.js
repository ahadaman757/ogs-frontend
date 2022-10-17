import ogsLogo from "../../Assets/Images/ogs_logo 1.svg";
const Navbar = () => {
  return (
    <>
      <nav className="container  navbar d-flex justify-content-between navbar-expand-lg bg-light">
        <div className="container-fluid navhie">
          <img className="navbar-brand logoOgs" src={ogsLogo} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-4">
                <a className=" ogsfonts16Nav">Home</a>
              </li>
              <li className="nav-item mx-4">
                <a className=" ogsfonts16Nav">Features</a>
              </li>
              <li className="nav-item mx-4">
                <a className=" ogsfonts16Nav">Interships</a>
              </li>
              <li className="nav-item mx-4">
                <a className=" ogsfonts16Nav">Members</a>
              </li>
              <li className="nav-item mx-4">
                <a className=" ogsfonts16Nav">OGS Courses</a>
              </li>
              <li className="nav-item mx-4">
                <a className=" ogsfonts16Nav">About Us</a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item mx-4">
                <button className="Loginbtn ogsfonts18">login</button>
              </li>
              <li className="nav-item mx-4">
                <button className="Registerbtn ogsfonts18">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
