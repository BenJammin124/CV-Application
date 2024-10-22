import cap from "../assets/graduation-cap-fill.svg";
export default function Education({
  education,
  handleSave,
  handleCancel,
  onChange,
  handleDelete,
}) {
  const handleEducationChange = (e) => onChange("education", e);
  return (
    <div>
      <div className="title-flex">
        <img src={cap} alt="" className="title-icons" />
        <h2 className="education-title">Education</h2>
      </div>
      <div>
        <label htmlFor="schoolName">
          School name: <span className="required">(required)</span>
        </label>
        <input
          type="text"
          id="schoolName"
          value={education.schoolName}
          onChange={handleEducationChange}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          value={education.degree}
          onChange={handleEducationChange}
        />
      </div>
      <div>
        <label htmlFor="start">Start year:</label>
        <input
          type="text"
          id="start"
          value={education.start}
          onChange={handleEducationChange}
        />
      </div>
      <div>
        <label htmlFor="end">End year:</label>
        <input
          type="text"
          id="end"
          value={education.end}
          onChange={handleEducationChange}
        />
      </div>

      <div className="button-wrap">
        <button onClick={handleDelete} id="deleteSchool">
          Delete
        </button>
        <div className="right-buttons">
          <button onClick={handleCancel} id="cancelEducation">
            Cancel
          </button>
          <button onClick={handleSave} id="saveSchool">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
