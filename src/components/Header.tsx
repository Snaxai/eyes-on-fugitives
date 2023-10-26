import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 0',
};

const logoStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '24px',
};

const navLinkStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkItemStyle = {
  display: 'inline',
  margin: '0 1rem',
  fontSize: '18px',
  textDecoration: 'none',
  color: 'white',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <div style={logoStyle}>
          <a href="/" style={logoStyle}>
            Your Logo
          </a>
        </div>
        <ul style={navLinkStyle}>
          <li style={linkItemStyle}><a href="/" style={linkItemStyle}>Home</a></li>
          <li style={linkItemStyle}><a href="/about" style={linkItemStyle}>About</a></li>
          <li style={linkItemStyle}><a href="/services" style={linkItemStyle}>Services</a></li>
          <li style={linkItemStyle}><a href="/portfolio" style={linkItemStyle}>Portfolio</a></li>
          <li style={linkItemStyle}><a href="/contact" style={linkItemStyle}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
