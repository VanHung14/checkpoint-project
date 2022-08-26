import Header from "../../Common/Header/Header";
import "./Invite.css";

function Invite() {
  return (
    <>
      <div className="container heading">
        <div className="row">
          <h1>Create checkpoint</h1>
          <div class="input-group mb-3">
            <div>
              <h4 className="title">Email</h4>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input email address to be checked"
            ></input>
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Select
            </button>
          </div>
          <div className="select-role">
            <h4 className="title">Select role</h4>
            <select style={{width: "100px"}} class="form-select" aria-label="Default select example">
              <option value="1">Group leader</option>
              <option value="2">Leader</option>
              <option value="3">Member</option>
            </select>
          </div>
          <i>Invite user by email</i>
          <div className="btn-save">
            <button type="button" class="btn btn-primary btn-save">
              Create checkpoint
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Invite;
