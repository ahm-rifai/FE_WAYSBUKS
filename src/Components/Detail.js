import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Topings from './Toping'

function Details() {
  return (
    <>
        <Container className='mt-5 d-flex justify-content-center align-items-center '>
            {/* section */}
            <div className='d-flex ' style={{width: '80%'}}>
                {/* left-section */}
                <div className='d-flex justify-content-center align-items-start ' style={{flex: '40%'}}>
                    <div>
                        <img src='/Assets/palmsugar.png' alt="coffee" style={{width: "85%", marginLeft: '53px'}}/>
                    </div>
                </div>

                {/* right-section */}
                <div className='d-flex justify-content-center ' style={{flex: '60%'}}>
                    <div style={{marginLeft: '60px'}}>
                        <h2 className='fw-bold mb-3 ' style={{textAlign: 'justify', color: '#BD0707'}}>Ice Coffee Palm Sugar</h2>
                        <p className='mb-5' style={{color: '#974A4A'}} >Rp. 27.000</p>

                        <h4 className='mb-4' style={{color: '#974A4A'}}>Toping</h4>

                        <div className='d-flex gap-5 'style={{display: 'Flex', flexWrap: 'wrap'}}>
                            <Topings />
                            <Topings />
                            <Topings />
                            <Topings />
                            <Topings />
                            <Topings />
                            <Topings />
                            <Topings />
                            
                        </div>

                        <div className='mt-4 mb-5 d-flex justify-content-between '>
                            <p className='fw-bold fs-5' style={{color: '#974A4A'}}>Total</p>
                            <p className='fw-bold fs-5' style={{color: '#974A4A'}}>Rp 27.000</p>
                        </div>

                        <div className='d-grid gap-2 mb-5'>
                            <Button variant='danger'>Add Chart</Button>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Details