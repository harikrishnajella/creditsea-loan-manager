import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const UserDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sanctionedLoanAmount, setSanctionedLoanAmount] = useState(0)
  const [newLoan, setNewLoan] = useState({
    fullName: '',
    loanAmount: '',
    loanTenure: '',
    employmentStatus: '',
    employmentAddress: '',
    reason: ''
  });

  const apiUrl = 'http://localhost:5000/api/user';

  const fetchData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setFormData(data);
    const totalApproved = data
        .filter(item => item.status === 'Approved')
        .reduce((sum, item) => sum + Number(item.loanAmount), 0);
    setSanctionedLoanAmount(totalApproved);
  };

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLoan({ ...newLoan, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLoan),
    });
    const data = await res.json();
    alert(data.message)
    fetchData()
    setNewLoan({
        fullName: '',
        loanAmount: '',
        loanTenure: '',
        employmentStatus: '',
        employmentAddress: '',
        reason: ''
    })
    handleClose();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className='text-center m-5'>User Dashboard</h1>
      
      <div className="d-flex justify-content-between align-items-center my-4 mb-3 mt-3">
        <h4>Approved Loan Amount: {sanctionedLoanAmount}</h4>
        <Button onClick={handleShow}>Get a Loan</Button>
      </div>

      <h3>Applied Loans</h3>
      <Table className='mb-5' striped bordered hover>
        <thead>
          <tr>
            <th>Loan Officer</th>
            <th>Loan Amount</th>
            <th>Your Name</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item) => (
            <tr key={item._id}>
              <td>{item.loanOfficer}</td>
              <td>{item.loanAmount}</td>
              <td>{item.fullName}</td>
              <td>{new Date(item.createdAt?.split('T')[0]).toLocaleDateString()}</td>
              <td>
                <span
                    disabled
                    className={`badge ${
                    item.status === 'Pending' ? 'bg-warning text-dark' :
                    item.status === 'Rejected' ? 'bg-danger' :
                    item.status === 'Approved' ? 'bg-success' :
                    item.status === 'Verified' ? 'bg-primary' : 'bg-secondary'
                    }`}
                >
                    {item.status}
                </span>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Form */}
      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for a Loan</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Label>Full name as it appears on bank account</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={newLoan.fullName}
                onChange={handleChange}
                placeholder='Full name as it appears on bank account'
                required
              />
            </Form.Group>

            <Form.Group controlId="formLoanAmount" className="mb-3">
              <Form.Label>How much do you need?</Form.Label>
              <Form.Control
                type="number"
                name="loanAmount"
                value={newLoan.loanAmount}
                onChange={handleChange}
                placeholder='How much do you need?'
                required
              />
            </Form.Group>

            <Form.Group controlId="formLoanTenure" className="mb-3">
              <Form.Label>Loan Tenure (in months)</Form.Label>
              <Form.Control
                type="text"
                name="loanTenure"
                value={newLoan.loanTenure}
                onChange={handleChange}
                placeholder='Loan Tenure (in months)'
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmploymentStatus" className="mb-3">
              <Form.Label>Employment Status</Form.Label>
              <Form.Control
                type="text"
                name="employmentStatus"
                value={newLoan.employmentStatus}
                onChange={handleChange}
                placeholder='Employment Status'
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmploymentAddress" className="mb-3">
              <Form.Label>Employment Address</Form.Label>
              <Form.Control
                type="text"
                name="employmentAddress"
                value={newLoan.employmentAddress}
                onChange={handleChange}
                placeholder='Employment Address'
                required
              />
            </Form.Group>

            <Form.Group controlId="formReason" className="mb-3">
              <Form.Label>Reason for Loan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="reason"
                placeholder='Reason for Loan'
                value={newLoan.reason}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default UserDashboard;
