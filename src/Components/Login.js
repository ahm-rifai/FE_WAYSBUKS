import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { InputEmail, InputPassword } from './Input';

function Logins(props) { //nangkap parameter


  return (
    //spilt operator
    <Modal {...props}
        size="md p-5"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
          <Modal.Title className='text-danger fw-bold '>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputEmail/>
            <InputPassword/>
            <div className="d-grid">
              <Button size="lg" className="py-1 fw-bold" variant="danger" onClick={props.onHide}> Login </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <div className='d-grid gap-2 m-auto'>
            <p>Don't have an account ? Klik Here </p>
            </div>
        </Modal.Footer>
      </Modal>
  );
}

export default Logins;