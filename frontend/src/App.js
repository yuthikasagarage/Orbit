import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import { MemoizedProductScreen } from './screens/ProductScreen';
const App = () => {
  return (
    <BrowserRouter>
      <Header> </Header>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/products/:id' component={MemoizedProductScreen} />
        </Container>
      </main>

      <Footer> </Footer>
    </BrowserRouter>
  );
};

export default App;
