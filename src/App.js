import {useEffect, useState} from 'react';

import {getAllRedWines} from './ApiService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

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
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-header'>Red Wine Gallery</div>
        <Row xs={1} md={3} lg={4} xl={5}>
          {redWines.map((wine) => {
            return (
              <Col className='p-3' key={wine.id}>
                {console.log(wine)}
                <Card className='h-100'>
                  <div className='text-center'>
                    <Image fluid src={wine.image} />
                  </div>
                  <Card.Body>
                    <Card.Title>{wine.wine}</Card.Title>
                    <Card.Text>
                      Location: {wine.location}
                      <br/>
                      Rating: {wine.rating.average}
                      <br/>
                      Reviews: {wine.rating.reviews}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
    </Container>
  );
}

export default App;
