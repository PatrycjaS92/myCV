import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

interface Experience {
  description: string;
  startYear: number;
  endYear: number | string;
  additionalText?: string;
}

interface Education {
  school: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number | string;
}

interface DataCV {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: Education[];
  contactData: {
    phone: number;
    email: string;
    country: string;
    city: string;
  };
}

const myDataCV: DataCV = {
  photo: "./src/assets/profile-photo.jpg",
  name: "Patrycja",
  lastName: "Spychalska",
  position: "Content Management Specialist",
  experience: [
    {
      description: "Content Management Specialist",
      startYear: 2024,
      endYear: "currently",
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      description: "Manual Tester",
      startYear: 2022,
      endYear: 2024,
      additionalText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
    },
  ],
  education: [
    {
      school: "Poznan University of Technology",
      fieldOfStudy: "Management and production engineering",
      startYear: 2011,
      endYear: 2016,
    },
  ],
  contactData: {
    phone: 123456789,
    email: "patrycja@email.com",
    country: "Poland",
    city: "Poznań",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="cv-main">
      <header className="cv-header">
        <div className="cv-header-title">
          <h1>
            {myDataCV.name} {myDataCV.lastName}
          </h1>
          <h3>{myDataCV.position} </h3>
          <div>
            <ul className="cv-contact-list">
              <li>Email: {myDataCV.contactData.email}</li>
              <li>Phone: {myDataCV.contactData.phone}</li>
              <li>City: {myDataCV.contactData.city}</li>
              <li>Country: {myDataCV.contactData.country}</li>
            </ul>
          </div>
        </div>
        <img className="cv-header-img" src={myDataCV.photo}></img>
      </header>

      <section className="cv-details-section">
        <aside className="cv-details-education">
          <h2>Education</h2>
          <ul className="cv-other-lists">
            {myDataCV.education.map((el, index) => (
              <li key={index}>
                <h3>
                  {el.startYear} - {el.endYear}
                </h3>
                <h4>{el.school}</h4>
                <p>{el.fieldOfStudy}</p>
              </li>
            ))}
          </ul>
        </aside>
        <section className="cv-details-experience">
          <h2>Experience</h2>
          <ul className="cv-other-lists">
            {myDataCV.experience.map((el, index) => (
              <li key={index}>
                <h3>
                  {el.startYear} - {el.endYear}
                </h3>
                <h4>{el.description}</h4>
                <p>{el.additionalText}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  </React.StrictMode>
);
