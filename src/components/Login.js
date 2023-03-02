import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Login.css';


import LandingCart from './LandingCart';
import NavBar from './NavBar';
import Hero from './Hero';

import data from '../data/shopping';

const Login = () => {
  return (
    <>
      <NavBar />
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
