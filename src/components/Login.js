import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Login.css';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/slices/authSlice';

import LandingCart from './LandingCart';

import Hero from './Hero';

import data from '../data/shopping';

const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(signIn());
  };
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Button onClick={login} variant="success">
                Log In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      <Container
        style={{
          marginTop: 100,
        }}
      >
        <Row>
          {data.map((item) => (
            <Col sm key={item.id}>
              <LandingCart
                name={item.name}
                image={item.image}
                price={item.price}
                summary={item.summary}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Login;
