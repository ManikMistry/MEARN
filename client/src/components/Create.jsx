import { useState } from "react";

function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });

  const updateFom = () => {};
  return (
    <div>
      <h3>Create a New Record</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mt-1"
            id="name"
            value={form.name}
            onChange={(e) => updateFom({ name: e.target.value })}
          />
        </div>
        <div className="from-group">
          <label htmlFor="position" className="mt-2">
            Position
          </label>
          <input 
          type="text" 
          className="form-control mt-1" 
          id="position"
          value={form.position}
          onChange={(e)=>updateFom({position:e.target.value})}
           />
        </div>

        <div className="form-group mt-4">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Intern"
            />
            <label htmlFor="positionIntern">Intern</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="Junior"
            />
            <label htmlFor="positionJunir">Junior</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionMidSenior"
              value="MidSenior"
            />
            <label htmlFor="positionMidSenior">Mid-Senior</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="Senior"
            />
            <label htmlFor="positionSenior">Senior</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create a record"
            className="btn btn-primary mt-4"
          />
        </div>
      </form>
    </div>
  );
}

export default Create;
