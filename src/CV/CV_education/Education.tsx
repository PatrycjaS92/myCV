import { DataCV } from "../interfaces";
import "./cv_education.css";

type Props = {
  myDataCV: DataCV;
};

const Education = ({ myDataCV }: Props) => {
  return (
    <aside className="cv-details-education">
      <h2>Education</h2>
      <ul className="cv-notHeader-lists">
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
  );
};

export { Education };
