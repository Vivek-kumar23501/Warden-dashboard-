import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MessReduction.css';

const MessReduction = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [
    {
      uniqueId: '01',
      name: 'vivek tiwari',
      branch: 'CSE',
      date: '01/05/2025',
      hostel: 'Boys Hostel',
      roomNumber: '101'
    },
    {
      uniqueId: '02',
      name: 'vivek kumar',
      branch: 'ECE',
      date: '02/01/2026',
      hostel: 'Girls Hostel',
      roomNumber: '202'
    }
  ];

  return (
    <div className={isMobile ? 'p-2 mobile-style' : 'p-4 desktop-style'}>
      <h3 className="mb-4">Hostel Allotment</h3>
      {data.map((student, index) => (
        <div key={index} className="mess-card mb-4">
          <table className="mess-table">
            <tbody>
              <tr>
                <td><strong>Unique ID :-</strong></td>
                <td>{student.uniqueId}</td>
                <td rowSpan="6" style={{ width: '150px' }} className="action-cell">
                  <Button color="primary" className="mb-2 w-100">Preview</Button>
                  <Button color="success" className="mb-2 w-100">Approve</Button>
                  <Button color="danger" className="mb-2 w-100">Reject</Button>
                </td>
              </tr>
              <tr>
                <td><strong>Name :-</strong></td>
                <td>{student.name}</td>
              </tr>
              <tr>
                <td><strong>Branch :-</strong></td>
                <td>{student.branch}</td>
              </tr>
              <tr>
                <td><strong>Date :-</strong></td>
                <td>{student.date}</td>
              </tr>
              <tr>
                <td><strong>Hostel Details :-</strong></td>
                <td>{student.hostel}</td>
              </tr>
              <tr>
                <td><strong>Room Number :-</strong></td>
                <td>{student.roomNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MessReduction;
