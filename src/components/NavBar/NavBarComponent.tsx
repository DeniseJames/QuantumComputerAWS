import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import styles from './NavBar.Component.module.css';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery(''); // Clear the search field after submission
  };

  const handleAuthAction = async () => {
    if (user) {
      await signOut();
      navigate('/'); // Navigate to the home page after signing out
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <Navbar expand="lg" className={styles.navbar}>
        <Navbar.Brand style={{ marginLeft: '2rem', marginRight: '10rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '1rem', color: 'gold', fontFamily: 'Georgia', fontSize: '1.5vw' }}>
            Quantum Computer Learning
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className={`d-flex justify-content-between w-100 ${styles.navContent}`}>
            <Nav className="me-auto">
              <LinkContainer to="/machine-learning">
                <Nav.Link className="text-white mx-2 fs-5">Machine Learning</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/web-design">
                <Nav.Link className="text-white mx-2 fs-5">Web Design</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/training">
                <Nav.Link className="text-white mx-2 fs-5">Training</Nav.Link>
              </LinkContainer>
            </Nav>
            <form className={`d-flex ${styles.searchForm}`} onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2 fs-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
             <button className={`btn ${styles['search-button']}  text-white mx-2 fs-5`} type="submit">Search</button>

            </form>
            <Button
              variant="outline-light"
              className="ms-2"
              onClick={handleAuthAction}
            >
              {user ? 'Log Out' : 'Login'}
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
