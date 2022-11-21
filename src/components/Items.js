import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import db, { auth } from '../firebase';

import Cards from './Cards';

import data from '../data/shopping';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection('favoritesPlacement')
      .where('user', '==', auth.currentUser.email)
      .onSnapshot((snapshot) => {
        const sets = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data().itemId,
        }));
        const changed = sets.map((val) => val.data);
        const mapped = data.map((val) => {
          if (changed.includes(val.id)) {
            val.inFavorites = true;
            return val;
          }

          val.inFavorites = false;
          return val;
        });
        setItems(mapped);
      });
  }, []);

  return (
    <Container
      style={{
        marginTop: 100,
      }}
    >
      <Row>
        {items.map((item) => (
          <Col sm key={item.id}>
            <Cards
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              summary={item.summary}
              description={item.description}
              inFavorites={item.inFavorites}
              quantity={item.quantity}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Items;
