import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const App = () => {
  const [count, setcount] = useState(0)

  // const InceaseCount = () => {
  //   setcount(count + 1)
  // }
  const InceaseCount = () => setcount(count + 1)
  
  const DiceaseCount = () =>count != 0 ? setcount(count - 1):''
  const ResetCount = () =>setcount(0)



  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }} className="text-center">
            <Card.Body>
              <Card.Title>Counter</Card.Title>
              <Card.Text className="display-4">
                {count}
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Button variant="primary" onClick={ InceaseCount} >+</Button>
                <Button variant="danger" onClick={ DiceaseCount}>-</Button>
                <Button variant="secondary" onClick={ ResetCount} >Reset</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
