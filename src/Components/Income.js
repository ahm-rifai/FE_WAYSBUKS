import React from 'react';
import { Container, Table } from 'react-bootstrap';

function Incomes() {
  return (
    <>
      <Container className="mt-5">
        <div className='mb-5'>
            <h2 style={{color: '#BD0707'}}>
                Income transaction
            </h2>
        </div>

        <div className='px-5'>
        <Table bordered hover>
          <thead>
            <tr className='table-secondary'>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Income</th>
              <th>Status</th>
              <th style={{textAlign: 'center'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td style={{color: '#061E99'}}>69.000</td>
              <td className='text-warning'>Waiting Approve</td>
              <td align="center">
                <button style={{ width: '100px', borderRadius: '8px' }} className="btn btn-danger btn-sm me-2 fw-bold">
                  Cancel
                </button>
                <button style={{ width: '100px', borderRadius: '8px' }} className="btn btn-success btn-sm fw-bold">
                  Approve
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Haris Gams</td>
              <td>Serang</td>
              <td>42111</td>
              <td style={{color: '#061E99'}}>30.000</td>
              <td className='text-success'>Success</td>
              <td align="center">
                <img src="/Assets/ceklis.svg" alt="success" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Aziz Union</td>
              <td>Bekasi</td>
              <td>13450</td>
              <td style={{color: '#061E99'}}>28.000</td>
              <td className='text-danger'>Cancel</td>
              <td align="center">
                <img src="/Assets/cancel.svg" alt="success" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lae Tanjung Balai</td>
              <td>Tanjung Balai</td>
              <td>21331</td>
              <td style={{color: '#061E99'}}>30.000</td>
              <td className='text-info'>On The Way</td>
              <td align="center">
                <img src="/Assets/ceklis.svg" alt="success" />
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
        
      </Container>
    </>
  );
}

export default Incomes;
