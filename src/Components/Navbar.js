import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Registers from '../Components/Register' 
import Logins from '../Components/Login' //supaya bisa digunakan komponen login
import React, {useState} from 'react'; //nangkap data baru & lama

function Navbars() {
    
    const [show, setShow] = useState(false); //set value klo true langsung muncul tanpa diklik
    const [showRegister, setShowRegister] = useState(false); //set value klo true langsung muncul tanpa diklik



  return (
    <>
    <Navbar bg="white" expand="lg">
      <Container>
      
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="100%"
              height="100%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

            <Navbar.Collapse className='justify-content-end gap-2'>
                
        {/* ketika di klil muncul modal */}
          <Button onClick={() => setShow(true)} variant="outline-danger" className='py-1 px-4 fw-bold'>Login</Button>

          <Button onClick={() => setShowRegister(true)} variant="danger" className='py-1 px-3 fw-bold'>Register</Button>


        </Navbar.Collapse>
      </Container>
    </Navbar>


    {/* render modal */}
    <Logins show={show} onHide={() => setShow(false)}/> 
    <Registers show={showRegister} onHide={() => setShowRegister(false)}/> 
    </>

  );
}

export default Navbars;
