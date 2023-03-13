import React from 'react'
import { Container } from 'react-bootstrap'
import Infoshops from './Infoshop'


function Profiles() {
  return (
    <>
        <Container className="px-5">
            <div className="row mt-5 px-5">
                    <div className="col-sm-6 col-md-6">
                        <div>
                            <p className="fw-bold fs-5 text-danger">My Profile</p>
                        </div>
                    <div/>

                        <div className="d-flex justify-content-between">
                            <div className="d-flex my-3">
                                <img className="me-4" src="/Assets/profileegi.png" width="200px" height="250" alt="profile" style={{borderRadius: '5px'}} />
                                <div>
                                    <text className="d-block fw-bold" style={{color: "#613D2B", fontSize: "18px"}}>Full Name</text>
                                    <text className="" style={{fontSize: "18px"}}>Egi Ganteng</text>
                                    <div className="mt-5">
                                        <text className="d-block fw-bold" style={{color: "#613D2B", fontSize: "18px"}}>Email</text>
                                        <text className="" style={{fontSize: "18px"}}>Egigans@gmail.com</text>
                                    </div>
                                </div>                       
                            </div>
                        </div>
                    </div>


                <div className="col-sm-6 col-md-6">
                    <div className="mb-4">
                        <p className="fw-bold fs-5">My Transactions</p>
                    </div>
    
                    <div className="py-3 rounded d-flex align-items-center" style={{background: "rgba(246, 218, 218, 1)", borderColor: "red"}}>
                        <div className="ms-3 mb-3 d-flex flex-column text-danger" style={{flex: "1"}}>
                            <Infoshops/>
                            <Infoshops/>
                        </div>
    
                        <div align="center" className="m-3 d-block">
                            <div>
                                <img src="/logo.svg" alt="brand" />
                            </div>
                            <div className="my-3">
                                <img src="/Assets/barcode.png" alt="barcode" />
                            </div>
                            <p className='bg-info rounded'><b style={{color: '#0795C4'}}>On The Wayt</b></p>
                            <text className="fw-bold" style={{fontSize: "14px", color: '#974A4A'}}>Sub Total : Rp.69.000</text>
                        </div>
                    </div>
                </div>
            </div>
        </Container>    
    </>
  )
}

export default Profiles