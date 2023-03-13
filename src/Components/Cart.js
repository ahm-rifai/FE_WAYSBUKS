import React from 'react'
import { Container, Stack, Form, Button } from 'react-bootstrap'
import ShopCarts from './Shopcart'

function Carts() {
  return (
    <>
        <Container className='px-5 mb-5'>
            {/* section */}
            <div className='d-flex px-5'>
                {/* section-left */}
                <Stack gap={3} className="col-md-5 me-5">
                    <div className="fs-4 fw-bold" style={{color: '#BD0707'}}>My Cart</div>
                    <div className="pb-2" style={{borderBottom: "2px solid #974A4A", color: "#BD0707"}} >Review Your Order</div>

                    {/* cart 1 & 2 */}
                   
                    <ShopCarts/>
                    <ShopCarts/>

                    <div style={{borderBottom: "2px solid #974A4A"}} />
                    
                        {/* subtotal, qty, total */}
                        <div className="row mt-3">
                            <div className="col-sm-6 col-md-8 text-danger">
                                <div style={{borderTop: "2px solid #974A4A"}} />
                                <div className="d-flex justify-content-between">
                                    <div className="mt-3">
                                        <p>Subtotal</p>
                                        <p>Qty</p>
                                    </div>
                                    <div align="right" className="mt-3">
                                        <p>69.000</p>
                                        <p>2</p>
                                    </div>
                                </div>

                                <div style={{borderBottom: "2px solid #974A4A"}} className="mb-3"/>
                                <div className="d-flex justify-content-between">
                                    <p className='fw-bold' style={{color: "#BD0707"}}>Total</p>
                                    <p className='fw-bold' style={{color: "#BD0707"}}>Rp. 60.000</p>
                                </div>
                            </div>

                            <div className='col-sm-6 col-md-4'>
                                <div className="py-3" style={{background: "#F7EEEE", border: "2px solid #BD0707", borderRadius: "5px"}}>
                                    <div className="mb-3" align="center">
                                        <img src="/assets/attachoftransaction.svg" alt="attect" width={40} height={40} />
                                    </div>
                                    <div align="center" style={{color: "gray"}}>
                                        <text style={{fontSize: "14px"}}>Attache Of Transactions</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Stack>

                {/* section-right */}
                <Stack derection= "vertical" gap={4} className="mt-3">
                    <div style={{paddingBottom: "40px"}} />
                        <Form.Control className="me-auto" placeholder="Name" style={{border: "2px solid #BD0707", background: '#E0C8C840' }} />
                        <Form.Control className="me-auto" placeholder="Email" style={{border: "2px solid #BD0707", background: '#E0C8C840' }} />
                        <Form.Control className="me-auto" placeholder="Phone" style={{border: "2px solid #BD0707", background: '#E0C8C840' }} />
                        <Form.Control className="me-auto" placeholder="Pos Code" style={{border: "2px solid #BD0707", background: '#E0C8C840' }} />
                        <Form.Control
                            as="textarea"
                            placeholder="Address"
                            style={{ height: '100px', resize: 'none', border: "2px solid #BD0707", background: '#E0C8C840'}}
                            />
                        <Button className='mt-4' variant="danger fw-bold">Pay</Button>
                </Stack>

            </div>
        </Container>
    </>
  )
}

export default Carts