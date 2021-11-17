import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <>
    <Navbar />
    <div className={styles.Home} data-testid="Home">
      Home Page
      <Button label="Fazer Login" />
    </div>
  </>
);

export default Home;
