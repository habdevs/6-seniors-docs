import { Routes, Route } from 'react-router-dom';

import { AnotherPage, MainPage } from '../Pages';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="wrapper">
      <Header />
      <main className="main">
        <NavMenu />
        <section>
          <Routes>
            <Route index ath="/" element={<MainPage />} />
            <Route path="another_page" element={<AnotherPage />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </Container>
  );
}

export default App;