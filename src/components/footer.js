import Github from "../img/image3.png";
import Linkedin from "../img/image4.png";
export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="foot-head">Connect with Me</h1>
      <ul>
        <li>
          <a
            href=""
            className="resume"
          >
            <strong> Resume </strong>
          </a>
        </li>
        <li>
          <a href="">
            <img src={Github} alt="github icon" className="icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Linkedin} alt="linkedin icon" className="icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
