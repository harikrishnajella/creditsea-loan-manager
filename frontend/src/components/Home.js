import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '90vh'}} className="text-center py-5">
      <Row>
        <Col>
          <h1>Welcome to Credit App</h1>
          <p className="lead">
            Apply for loans, verify applications, and manage approvals efficiently.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="primary" onClick={() => navigate('/user-dashboard')}>
              User Dashboard
            </Button>
            <Button variant="info" onClick={() => navigate('/verifier-dashboard')}>
              Verifier Dashboard
            </Button>
            <Button variant="dark" onClick={() => navigate('/admin-dashboard')}>
              Admin Dashboard
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
