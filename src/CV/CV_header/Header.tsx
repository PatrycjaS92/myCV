import { DataCV } from "../interfaces";
import "./cv_header.css";

type Props = {
  myDataCV: DataCV;
};

const Header = ({ myDataCV }: Props) => {
  return (
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
  );
};
export { Header };
