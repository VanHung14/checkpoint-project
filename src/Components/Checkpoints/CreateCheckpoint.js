import Table from "react-bootstrap/Table";
import "./CreateCheckpoint.css";
function Checkpoints() {
  return (
    <>
      <div className="container manage-user">
        <div className="row">
          <h1>Create checkpoint</h1>
          <div class="input-group mb-3">
            <div>
              <h4 className="title-create">Title</h4>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input title"
            ></input>
          </div>
          <div class="input-group mb-3">
            <div>
              <h4 className="title-create">User</h4>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input title"
            ></input>
          </div>

          <h4>Select user perform checkpoint</h4>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Lastname</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>hungdv_tts@rikkeisoft.com</td>
                <td>Hùng</td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    disabled
                  >
                    <option value="1">Group leader</option>
                    <option value="2">Leader</option>
                    <option value="3">Member</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>tinhtv_tts@rikkeisoft.com</td>
                <td>Tình</td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    disabled
                  >
                    <option value="1">Group leader</option>
                    <option value="2">Leader</option>
                    <option value="3">Member</option>
                  </select>
                </td>
              </tr>
            </tbody>
            <div>
              <input type="checkbox" id="select-all"></input>
              <label for="scales">Chọn tất cả</label>
            </div>
          </Table>

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

export default Checkpoints;
