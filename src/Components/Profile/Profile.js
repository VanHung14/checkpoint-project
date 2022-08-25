import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../Common/Header/Header";

function Profile() {
  return (
    <>
      <Header></Header>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <h1>Profile</h1>
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

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
