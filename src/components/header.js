import * as React from "react";
import { Link } from "gatsby";
import priorityPlus from 'priority-plus';
import { StaticImage } from 'gatsby-plugin-image'

const Header = ({ siteTitle, menuLinks }) => {
  // Using useEffect to call the priorityPlus function after the component mounts
  React.useEffect(() => {
    try {
      // Ensure the target element exists before calling priorityPlus
      const targetElement = document.querySelector('.js-p-target');
      if (targetElement) {
        priorityPlus(targetElement, {
          innerToggleTemplate: '<div class="hamburger"></div>',
        });
      } else {
        console.error('Target element not found for priorityPlus.');
      }
    } catch (error) {
      console.error('Error initializing priorityPlus:', error);
    }
  }, []); // The empty array ensures this effect runs once after the initial render

  return (
    <header>
      <div className="content">
        <Link
          to="/"
          className="logo"
          activeClassName="active"
        >
          {siteTitle}&nbsp;
        </Link>
    
        <div className="menu">
          <nav>
            <ul className="js-p-target">
              {menuLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.link} activeClassName="active">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
  
};

export default Header;
