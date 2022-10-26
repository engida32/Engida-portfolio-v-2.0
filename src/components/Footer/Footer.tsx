import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import twitter from "../../assets/twitter-seeklogo.com.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Engida</span>
      </a>
      <div>
        <p>
          This site was made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/engida/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a href="https://github.com/engida32" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/engida_lg/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>{" "}
        <a
          href="https://twitter.com/engida_lish"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
