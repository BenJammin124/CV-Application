import brief from "../assets/briefcase-fill.svg";
export default function Experience({
  experience,
  handleCancel,
  onChange,
  handleDelete,
  handleSave,
}) {
  const handleExperienceChange = (e) => onChange("experience", e);
  return (
    <div>
      <div className="title-flex">
        <img src={brief} alt="" className="title-icons" />
        <h2 className="experience-title">Experience</h2>
      </div>
      <div>
        <label htmlFor="company">Company name:</label>
        <input
          type="text"
          id="company"
          value={experience.company}
          onChange={handleExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="position">Position title:</label>
        <input
          type="text"
          id="position"
          value={experience.position}
          onChange={handleExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="start">Start (MM/YY):</label>
        <input
          type="text"
          id="start"
          value={experience.start}
          onChange={handleExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="end">End (MM/YYYY):</label>
        <input
          type="text"
          id="end"
          value={experience.end}
          onChange={handleExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={experience.location}
          onChange={handleExperienceChange}
        />
      </div>
      <div>
        <label htmlFor="description">Short description:</label>
        <textarea
          id="description"
          value={experience.description}
          onChange={handleExperienceChange}
        ></textarea>
      </div>
      <div className="button-wrap">
        <button onClick={handleDelete} id="deleteExperience">
          Delete
        </button>
        <div className="right-buttons">
          <button onClick={handleCancel} id="cancelExperience">
            Cancel
          </button>
          <button onClick={handleSave} id="saveExperience">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
