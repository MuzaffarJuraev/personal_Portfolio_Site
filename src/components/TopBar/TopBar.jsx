import "./topbar.css";

const TopBar = () => {
  return (
    <div>
      <div className="TopBarContainer">
        <div className="logoContainer">
          <h2>Natitanic</h2>
        </div>
        <div className="menuContainer">
          <div className="menuItem">
            <p>Home</p>
          </div>
          <div className="menuItem">
            <p>About Me</p>
          </div>
          <div className="menuItem">
            <p>Portfolio</p>
          </div>
          <div className="menuItem">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
