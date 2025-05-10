import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AdminDashboard = () => {
  const [formData, setFormData] = useState([]);

  const apiUrl = 'http://localhost:5000/api/admin/user';

  const fetchData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const pendingLoans = data.filter(item =>item.status !== 'Rejected');
    setFormData(pendingLoans);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const statusHandler = async (id, newStatus) => {
    const res = await fetch(`${apiUrl}/status/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    const data = await res.json();
    fetchData();
    alert(data.message);
  };

  return (
    <div className="container mt-4">
      <h1  className='text-center m-5'>Admin Dashboard</h1>

      <h3  className='mb-3'>User Applied Loans</h3>
      <Table className='mb-5' striped bordered hover>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Loan Amount</th>
            <th>Reason</th>
            <th>Date Applied</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.map(item => (
            <tr key={item._id}>
              <td>{item.fullName}</td>
              <td>{item.loanAmount}</td>
              <td>{item.reason}</td>
              <td>{new Date(item.createdAt?.split('T')[0]).toLocaleDateString()}</td>
              <td>
                <span
                  className={`badge px-2 py-1 ${
                    item.status === 'Pending' ? 'bg-warning text-dark'
                      : item.status === 'Approved' ? 'bg-success'
                      : item.status === 'Verified' ? 'bg-primary'
                      : item.status === 'Rejected' ? 'bg-danger'
                      : 'bg-secondary'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                {(item.status !== 'Approved') && (item.status !== 'Rejected') && 
                <>
                <Button
                  variant="success"
                  size="sm"
                  className="me-2"
                  onClick={() => statusHandler(item._id, 'Approved')}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => statusHandler(item._id, 'Rejected')}
                >
                  Reject
                </Button>
                </>
                 }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminDashboard;

