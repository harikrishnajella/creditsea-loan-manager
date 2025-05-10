import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, Container } from 'react-bootstrap';
import { FaCircleUser } from 'react-icons/fa6';

const AppNavbar = () => {
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">CREDIT APP</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center gap-3">
          <FaCircleUser color="white" size={28} />
          <Form.Select
            onChange={handleRoleChange}
            style={{ border: 0, width: '100px' }}
          >
            <option value="/user-dashboard">User</option>
            <option value="/verifier-dashboard">Verifier</option>
            <option value="/admin-dashboard">Admin</option>
          </Form.Select>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
