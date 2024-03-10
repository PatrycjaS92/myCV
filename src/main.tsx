import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

interface Experience {
  description: string;
  startYear: number;
  endYear: number | string;
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
    phone?: number | undefined;
    email: string;
    country?: string | undefined;
    city?: string | undefined;
    addressDetails?: string | undefined;
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
    },
    {
      description: "Manual Tester",
      startYear: 2022,
      endYear: 2024,
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
    addressDetails: "ulica 4/5",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <header>
        <h1>
          {myDataCV.name} {myDataCV.lastName}
        </h1>
        <p>{myDataCV.position} </p>
        <img src={myDataCV.photo}></img>
      </header>

      <section>
        <aside>
          <div>
            <h2>Contact details:</h2>
            <ul>
              <li>{myDataCV.contactData.email}</li>
              <li>{myDataCV.contactData.phone}</li>
              <li>{myDataCV.contactData.addressDetails}</li>
              <li>{myDataCV.contactData.city}</li>
              <li>{myDataCV.contactData.country}</li>
            </ul>
          </div>
          <div>
            <h2>Education:</h2>
            {myDataCV.education.map((el, index) => (
              <li key={index}>
                <strong>
                  {el.startYear} - {el.endYear}
                </strong>
                <p>{el.school}</p>
                <p>{el.fieldOfStudy}</p>
              </li>
            ))}
          </div>
        </aside>
        <section>
          <h2>Experience:</h2>
          <ul>
            {myDataCV.experience.map((el, index) => (
              <li key={index}>
                <strong>
                  {el.startYear} - {el.endYear}
                </strong>
                <p>{el.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  </React.StrictMode>
);
