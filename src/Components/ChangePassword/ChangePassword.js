import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../Common/Header/Header";

function ChangePassword() {
  return (
    <>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <h1>Change password</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicOldPass">
                <Form.Label>Old password</Form.Label>
                <Form.Control type="password" placeholder="Old password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNewPass">
                <Form.Label>New password</Form.Label>
                <Form.Control type="password" placeholder="New password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasiConfirmPass">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Change
              </Button>
            </Form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
