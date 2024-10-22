import { useState } from "react";
import Person from "./data";
import Preview from "./components/preview";
import PersonalDetails from "./components/PersonalDetails";
import Experience from "./components/Experience";
import "./App.css";
import Education from "./components/Education";
import cap from "./assets/graduation-cap-fill.svg";
import brief from "./assets/briefcase-fill.svg";

function App() {
  const [personalDetails, setPersonalDetails] = useState(Person);
  const [education, setEducation] = useState(Person.education);
  const [educationIndex, setEducationIndex] = useState(null);
  const [tempEducation, setTempEducation] = useState(null);

  const [tempExperience, setTempExperience] = useState(null);
  const [experience, setExperience] = useState(Person.experience);
  const [experienceIndex, setExperienceIndex] = useState(null);

  function handleChange(e) {
    const { id, value } = e.target;
    setPersonalDetails({ ...personalDetails, [id]: value });
  }

  // function handleArrayChange(e) {
  //   const { id, value } = e.target;

  //   setEducation((prevEducation) =>
  //     prevEducation.map((school, i) =>
  //       i === educationIndex ? { ...school, [id]: value } : school
  //     )
  //   );
  //   console.log(educationIndex);
  // }

  function handleArrayChange(type, e) {
    const { id, value } = e.target;
    if (type === "education") {
      setTempEducation((prev) => ({ ...prev, [id]: value }));
    } else if (type === "experience") {
      setTempExperience((prev) => ({ ...prev, [id]: value }));
    }

    console.log(tempEducation);
    console.log(tempExperience);
  }

  function handleEdit(e) {
    const targetEdit = e.target.textContent;
    const indexToEdit = education.findIndex(
      (school) => targetEdit === school.schoolName
    );
    console.log(indexToEdit);
    setEducationIndex(indexToEdit);
    setTempEducation({ ...education[indexToEdit] });
    console.log({ ...education[indexToEdit] });
  }

  function handleEditExperience(e) {
    const targetEdit = e.target.textContent;
    const indexToEdit = experience.findIndex(
      (job) => targetEdit === job.company
    );
    console.log(indexToEdit);
    setExperienceIndex(indexToEdit);
    setTempExperience({ ...experience[indexToEdit] });
  }

  function handleCancel(e) {
    const { id } = e.target;
    if (id === "cancelEducation") {
      setEducation(education.filter((school) => school.schoolName !== ""));
      setTempEducation(null);
      setEducationIndex(null);
    } else {
      setExperience(experience.filter((job) => job.company !== ""));
      setExperienceIndex(null);
      setExperienceIndex(null);
    }

    console.log(id);
  }

  function handleAddNew(e) {
    const { id } = e.target;
    if (id === "newSchool") {
      const newSchool = {
        schoolName: "",
        degree: "",
        start: "",
        end: "",
      };

      setEducation((prevEducation) => [...prevEducation, newSchool]);
      console.log(education);
      setEducationIndex(education.length);
      setTempEducation(newSchool);
    } else if (id === "newExperience") {
      const newExperience = {
        company: "",
        position: "",
        start: "",
        end: "",
        location: "",
        description: "",
      };

      setExperience((prevExperience) => [...prevExperience, newExperience]);
      setExperienceIndex(experience.length);
      setTempExperience(newExperience);
    }
  }

  function handleSave(e) {
    const { id } = e.target;
    if (id === "saveSchool") {
      setEducation((prevEducation) => {
        if (tempEducation.schoolName === "") {
          return prevEducation.filter((school, i) => i !== educationIndex);
        } else {
          return prevEducation.map((school, i) =>
            i === educationIndex ? tempEducation : school
          );
        }
      });

      setEducationIndex(null);
      setTempEducation(null);
    } else if (id === "saveExperience") {
      setExperience((prevExperience) => {
        if (tempExperience.company === "") {
          return prevExperience.filter((job, i) => i !== experienceIndex);
        } else {
          return prevExperience.map((job, i) =>
            i === experienceIndex ? tempExperience : job
          );
        }
      });
      setExperienceIndex(null);
      setTempExperience(null);
    }
  }

  function handleDelete(e) {
    const { id } = e.target;
    if (id === "deleteSchool") {
      const stuped = education.filter((school, i) => i !== educationIndex);
      setEducation(stuped);
      setEducationIndex(null);
      setTempEducation(null);
      console.log(stuped);
    } else if (id === "deleteExperience") {
      const work = experience.filter((job, i) => i !== experienceIndex);
      setExperience(work);
      setExperienceIndex(null);
      setTempExperience(null);
    }
  }

  return (
    <div>
      <main className="main-wrapper">
        <div className="side-bar">
          <header>
            <h1>CVGenerator</h1>
          </header>
          <h2>Personal Details</h2>
          <PersonalDetails
            personalDetails={personalDetails}
            onChange={handleChange}
          />

          {educationIndex === null ? (
            <div className="education-input">
              <div className="title-flex">
                <img src={cap} alt="" className="title-icons" />
                <h2 className="education-title">Education</h2>
              </div>
              {education.map((school, index) => (
                <div key={index} id={index} onClick={handleEdit}>
                  <h3>{school.schoolName}</h3>
                </div>
              ))}
              <button onClick={handleAddNew} id="newSchool">
                Add new school
              </button>
            </div>
          ) : (
            <Education
              education={tempEducation}
              handleSave={handleSave}
              handleCancel={handleCancel}
              onChange={handleArrayChange}
              handleDelete={handleDelete}
            />
          )}

          {experienceIndex === null ? (
            <div className="experience-input">
              <div className="title-flex">
                <img src={brief} alt="" className="title-icons" />
                <h2 className="experience-title">Experience</h2>
              </div>
              {experience.map((job, index) => (
                <div key={index} onClick={handleEditExperience}>
                  <h3>{job.company}</h3>
                </div>
              ))}
              <button id="newExperience" onClick={handleAddNew}>
                Add new experience
              </button>
            </div>
          ) : (
            <Experience
              experience={tempExperience}
              // index={experienceIndex}
              handleSave={handleSave}
              handleDelete={handleDelete}
              handleCancel={handleCancel}
              onChange={handleArrayChange}
            />
          )}
        </div>
        <div className="cv-preview">
          <Preview
            person={personalDetails}
            education={education}
            tempEducation={tempEducation}
            educationIndex={educationIndex}
            experience={experience}
            tempExperience={tempExperience}
            experienceIndex={experienceIndex}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
