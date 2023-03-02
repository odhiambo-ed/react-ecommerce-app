import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../features/slices/authSlice';
import { getData } from '../features/slices/cartSlice';
import { getFavoritesData } from '../features/slices/favoritesSlice';
import { getPurchasesData } from '../features/slices/purchasesSlice';
import db, { auth } from '../firebase';

import '../styles/Navigation.css';

import Cart from '../assets/cart.png';

function Navigation({ setCurrentTab }) {
  const data = useSelector((state) => state.cart.value);
  const favorites = useSelector((state) => state.favorites.value);
  const purchases = useSelector((state) => state.purchases.value);
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection('cartPlacement')
      .where('user', '==', auth.currentUser.email)
      .onSnapshot((snapshot) => {
        dispatch(
          getData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          ),
        );
      });
  }, []);
  useEffect(() => {
    db.collection('favoritesPlacement')
      .where('user', '==', auth.currentUser.email)
      .onSnapshot((snapshot) => {
        dispatch(
          getFavoritesData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          ),
        );
      });
  }, []);
  useEffect(() => {
    db.collection('purchased')
      .where('user', '==', auth.currentUser.email)
      .onSnapshot((snapshot) => {
        dispatch(
          getPurchasesData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          ),
        );
      });
  }, []);
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                setCurrentTab('Home');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setCurrentTab('Purchases');
              }}
            >
              Purchases
            </Nav.Link>
            <p className="lengthIndicators">{purchases.length}</p>
            <Nav.Link
              onClick={() => {
                setCurrentTab('Favorites');
              }}
            >
              Favorites
            </Nav.Link>
            <p className="lengthIndicators">{favorites.length}</p>
            <Nav.Link
              onClick={() => {
                setCurrentTab('Cart');
              }}
            >
              <i className="fas fa-shopping-bag"></i>
            </Nav.Link>
            <p className="lengthIndicators">{data.length}</p>
          </Nav>
          <Nav>
            <NavDropdown title={auth?.currentUser?.displayName} id="collasible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
