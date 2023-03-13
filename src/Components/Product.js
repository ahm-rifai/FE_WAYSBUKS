import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

function Products() {
  return (
    <>
      <Container className='mt-5 d-flex justify-content-center align-items-center '>
            {/* section */}
            <div className='d-flex ' style={{width: '80%'}}>
                {/* left-section */}
                <div className='' style={{flex: '60%'}}>
                    <div>
                        <p className="fs-4 fw-bold text-danger">Products</p>
                    </div>

                    <div className='mt-5'>
                        <Form.Control className="me-auto mb-4" placeholder="Name Product" style={{border: "2px solid #BD0707", background: '#E0C8C840' }} />
                        <Form.Control className="me-auto mb-4" placeholder="Price" style={{border: "2px solid #BD0707", background: '#E0C8C840' }} />
                        <div className="input-group mb-3 rounded" style={{border: "2px solid #BD0707", background: '#E0C8C840'}}>
                            <input type="file" className="form-control" id="inputGroupFile02"/>
                            <label className="input-group-text" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="danger" size="md" className="mx-5 mt-3 fw-bold">Add Products</Button>
                    </div> 
                </div>

                {/* right-section */}
                <div className='d-flex justify-content-center ' style={{flex: '40%'}}>
                    <div>
                        <img src='/Assets/palmsugar.png' alt="coffee" style={{width: "85%", marginLeft: '53px'}}/>
                    </div>
                </div>
            </div>
        </Container>
    </>
  );
}

export default Products;
