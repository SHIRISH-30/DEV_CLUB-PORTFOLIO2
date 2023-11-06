import Github from "../img/image3.png";
import Linkedin from "../img/image4.png";
export default function Header() {
  return (
    <header>
      <div className="head">
        <a
          href=""
          className="logo"
        >
          <strong> SS </strong>
        </a>
      </div>
      <nav className="navbar">
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
      </nav>
    </header>
  );
}
