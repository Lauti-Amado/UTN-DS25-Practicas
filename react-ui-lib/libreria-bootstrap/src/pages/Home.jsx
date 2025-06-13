import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Menu />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
