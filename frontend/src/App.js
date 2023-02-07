import {useEffect, useState} from 'react';

import {getAllRedWines} from './ApiService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import './App.css';

function App() {
  const [redWines, setRedWines] = useState([]);
  const [allWines, setAllWines] = useState([]);

  useEffect(() => {
    const fetchRedWines = async () => {
      const wines = await getAllRedWines();
      setRedWines(wines);
      setAllWines(wines);
    }

    fetchRedWines();
  }, []);

  function Search(searchTerm) {
    var results = allWines.filter(wine => wine.location.toLowerCase().includes(searchTerm) ||  wine.wine.toLowerCase().includes(searchTerm));
    setRedWines(results);
  }

  return (
    <Container className='App'>
        <h1 className='App-header m-5'>Red Wine Gallery</h1>
        <Form className='pull-right'>
          <Form.Group>
            <Form.Control type='text' placeholder='Search for a wine!' onChange={e => Search(e.target.value)} />
            <h3 className='p-2'>{redWines.length} wines!!!</h3>
          </Form.Group>
        </Form>
        <Row xs={1} md={3} lg={4} xl={5}>
          {redWines.map((wine) => {
            return (
              <Col className='p-3' key={wine.id}>
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
