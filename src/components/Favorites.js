import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

import FavoritesCard from './FavoritesCard';

const Favorites = () => {
  const data = useSelector((state) => state.favorites.value);
  return (
    <Container
      style={{
        marginTop: 100,
      }}
    >
      <Row>
        {data.map((item) => (
          <Col sm key={item.id}>
            <FavoritesCard
              id={item.id}
              name={item.data.itemName}
              image={item.data.itemImage}
              price={item.data.price}
              summary={item.data.summary}
              description={item.data.description}
              quantity={item.data.quantity}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favorites;
