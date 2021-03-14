import { useState } from "react";
import { useDispatch } from "react-redux";
import FormAcions from "../Actions/FormAcions";

const Actions = (props) => {
  const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(FormAcions.addItem(firstName));
  };

  return (
    <div>
      <h3>
        Demo for
        <small class="text-muted"> React-Redux</small>
      </h3>
      <form onSubmit={handleSubmit}>
        <div class="row" style={{ marginTop: "50px" }}>
          <div class="mb-5 col-2">
            <label class="form-label">Grocery Item</label>
          </div>
          <div class="col">
            <input
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              name="userName"
              value={firstName}
              class="form-control"
            />
          </div>
          <div class="col-1">
            <input type="submit" class="btn btn-primary" />
          </div>
          <div class="col">
            <input
              type="button"
              onClick={(event) => {
                dispatch(FormAcions.clearItems());
              }}
              value="Clear List"
              class="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Actions;
