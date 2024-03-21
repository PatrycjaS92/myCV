import { Header } from "./CV_header/Header";
import { DataCV } from "./interfaces";
import { Education } from "./CV_education/Education";
import { Experience } from "./CV_experience/Experience";
import "./cv_style.css";

const CV = () => {
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

  return (
    <main className="cv-main">
      <Header myDataCV={myDataCV} />
      <Education myDataCV={myDataCV} />
      <Experience myDataCV={myDataCV} />
    </main>
  );
};

export { CV };
