import {useEffect, useState} from 'react';

import {getAllRedWines} from './ApiService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import './App.css';

function App() {
  const [redWines, setRedWines] = useState([]);

  useEffect(() => {
    const fetchRedWines = async () => {
      const wines = await getAllRedWines();
      setRedWines(wines);
    }

    fetchRedWines();
  }, []);

  return (
    <Container className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row>
          {redWines.map((wine) => {
            return (
              <Col className='red'key={wine.id}>
                <div className='border border-danger'>
                  <p>{wine.wine}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </header>
    </Container>
  );
}

export default App;
