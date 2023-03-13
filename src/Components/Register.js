import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { InputEmail, InputName, InputPassword } from '../Components/Input'

function Registers(props) { //nangkap parameter
    return (
      //spilt operator
      <Modal {...props}
          size="md p-5"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          <Modal.Header closeButton>
            <Modal.Title className='text-danger fw-bold '>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='my-3'>
                <InputEmail/>  
                <InputPassword/>  
                <InputName/>  

                <div className="d-grid">
                  <Button size="lg" className="py-1 fw-bold" variant="danger" onClick={props.onHide}> Register </Button>
                </div>
            </Form>


          </Modal.Body>
          <Modal.Footer>
              <div className='d-grid gap-2 m-auto'>
                <p>Already have an account ? Login ... </p>
              </div>
          </Modal.Footer>
        </Modal>
    );
  }
  
  export default Registers;