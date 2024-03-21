import { DataCV } from "../interfaces";
import "./cv_experience.css";

type Props = {
  myDataCV: DataCV;
};

const Experience = ({ myDataCV }: Props) => {
  return (
    <section className="cv-details-experience">
      <h2>Experience</h2>
      <ul className="cv-notHeader-lists">
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
  );
};
export { Experience };
