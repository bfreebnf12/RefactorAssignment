const Header = ({ title }) => (
  <div className="wholeContainer">
      <div className="header">
          <h1>{title}</h1>
          <nav>
              <ul className="header-topics">
                  <li>about us</li>
                  <li>info</li>
                  <li>support us</li>
              </ul>
          </nav>
      </div>
  </div>
);

export default Header;