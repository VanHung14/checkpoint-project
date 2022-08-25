import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <>
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <h1 style={{ alignItems: "center" }}>Link register</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group class Name="mb-3" controlId="formBasicFirstname">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="FirstName" placeholder="FirstName" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="Lastname" placeholder="Lastname" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="Address" placeholder="Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="Phone" placeholder="Phone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmpassword">
                <Form.Label>Confirmpassword</Form.Label>
                <Form.Control
                  type="Confirmpassword"
                  placeholder="Confirmpassword"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Register;
