import React, { useState } from 'react';

import Navigation from './Navigation';
import Items from './Items';
import Favorites from './Favorites';
import Cart from './Cart';
import Purchases from './Purchases';

const Home = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  return (
    <div>
      <Navigation setCurrentTab={setCurrentTab} />
      {currentTab === 'Home' ? (
        <Items />
      ) : currentTab === 'Favorites' ? (
        <Favorites />
      ) : currentTab === 'Purchases' ? (
        <Purchases />
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default Home;
