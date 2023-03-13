import Form from 'react-bootstrap/Form'

function InputEmail() {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    autoFocus
                    style={{borderColor: "red", border: "3px solid red", background: '#E0C8C840' }}
                />
                </Form.Group>
        </>
    )
}


function InputPassword() {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    autoFocus
                    style={{borderColor: "red", border: "3px solid red", background: '#E0C8C840' }}
                />
                </Form.Group>
        </>
    )
}


function InputName() {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Full Name"
                    autoFocus
                    style={{borderColor: "red", border: "3px solid red", background: '#E0C8C840' }}
                />
                </Form.Group>
        </>
    )
}




export { InputEmail, InputName, InputPassword }