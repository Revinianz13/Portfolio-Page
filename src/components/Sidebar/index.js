import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSim from '../../assets/images/logoSim.png'
import Revinian from '../../assets/images/Revinianz_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faEnvelope,
  faHome,
  faUser,

} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoSim} alt="logo" />
        <img className="sub-logo" src={Revinian} alt="sub"></img>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="about-link"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="contact-link"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="projects-link" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/antonios-c-031b8924b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Revinianz13"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.slack.com"
          >
            <FontAwesomeIcon icon={faSlack} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
