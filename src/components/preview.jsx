import "../preview.css";
import phone from "../assets/phone-outline.svg";
import email from "../assets/email-outline.svg";
import pin from "../assets/map-marker.svg";
export default function Preview({
  person,
  education,
  tempEducation,
  educationIndex,
  experience,
  tempExperience,
  experienceIndex,
}) {
  return (
    <div>
      <section className="previewHeader">
        <div className="headerLeft">
          <h1>{person.name}</h1>
          <h2>{person.occupation}</h2>
        </div>
        <div className="headerRight">
          <div className="headerIcon">
            <img src={pin} alt="" />
            <p>{person.address}</p>
          </div>
          <div className="headerIcon">
            <img src={email} alt="" />
            <p>{person.email}</p>
          </div>
          <div className="headerIcon">
            <img src={phone} alt="" />
            <p>{person.phone}</p>
          </div>
        </div>
      </section>
      <main>
        <section className="education">
          <div className="education-wrapper">
            <h2>Education</h2>
            {education.map((school, index) => (
              <div key={index} className="schoolBox">
                {index !== educationIndex ? (
                  <>
                    <div className="schoolLeft">
                      <p>
                        {school.start} - {school.end}
                      </p>
                    </div>
                    <div className="schoolRight">
                      <p className="school-title">{school.schoolName}</p>
                      <p>{school.degree}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="schoolLeft">
                      <p>
                        {tempEducation.start} - {tempEducation.end}
                      </p>
                    </div>
                    <div className="schoolRight">
                      <p className="school-title">{tempEducation.schoolName}</p>
                      <p>{tempEducation.degree}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="experience">
          <div className="experience-wrapper">
            <h2>Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="experienceBox">
                {index !== experienceIndex ? (
                  <>
                    <div className="experienceLeft">
                      <p>
                        {job.start} - {job.end}
                      </p>
                      <p>{job.location}</p>
                    </div>
                    <div className="experienceRight">
                      <p className="companyName">{job.company}</p>
                      <p>{job.position}</p>
                      <p>{job.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="experienceLeft">
                      <p>
                        {tempExperience.start} - {tempExperience.end}
                      </p>
                      <p>{tempExperience.location}</p>
                    </div>

                    <div className="experienceRight">
                      <p className="companyName">{tempExperience.company}</p>
                      <p>{tempExperience.position}</p>
                      <p>{tempExperience.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// school.schoolName !== tempEducation?.schoolName
