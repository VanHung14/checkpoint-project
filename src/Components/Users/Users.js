import Header from "../../Common/Header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "./User.css";

function User() {
  return (
    <>
      <div className="container manage-user">
        <div className="row">
          <h1>Manage users</h1>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search user by email address..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            ></input>
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Enable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>hungdv_tts@rikkeisoft.com</td>
                <td>Đinh</td>
                <td>Hùng</td>
                <td>0935678376</td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Group leader</option>
                    <option value="2">Leader</option>
                    <option value="3">Member</option>
                  </select>
                </td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    ></input>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>tinhtv_tts@rikkeisoft.com</td>
                <td>Trần</td>
                <td>Tình</td>
                <td>0905442668</td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Group leader</option>
                    <option value="2">Leader</option>
                    <option value="3">Member</option>
                  </select>
                </td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    ></input>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="btn-save">
            <button type="button" class="btn btn-primary btn-save">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
