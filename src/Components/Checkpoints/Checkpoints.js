import Table from "react-bootstrap/Table";
import Header from "../../Common/Header/Header";
function Checkpoints() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center", padding: "30px" }}>
          <h1>List checkpoints need to be checked</h1>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ textAlign: "center" }}>Checkpoints</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ textAlign: "center" }}>
                Checkpoint 360 ChauHH đợt tháng 4
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ textAlign: "center" }}>
                Checkpoint 360 TinhTV đợt tháng 4
              </td>
            </tr>
          </tbody>
        </Table>

        <div style={{ fontStyle: "italic" }}>
          <h4>Click on title to checkpoint</h4>
        </div>
      </div>
    </>
  );
}

export default Checkpoints;
