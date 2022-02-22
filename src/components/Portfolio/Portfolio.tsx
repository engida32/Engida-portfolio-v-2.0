import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/engida32/MovieApp.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Movie Trailer  App.</h3>
              <p>movie  app built with flutter and bloc state management which can be used on different platforms such as(Android, iOS and web). using the themoviedb api
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Dart</li>
                <li>Json api</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/engida32/NewsApp.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>

              </div>
            </header>
            <div className="body">
              <h3>NEWS APP</h3>
              <p>
                Fully Functional  News mobile app to Locate popular articles and breaking news headlines from news diifferent sources and blogs across the web with  JSON API using the JSON API from <br></br> https://newsapi.org
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Dart</li>
                <li>Json api</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">

                <a href="https://joaotuliojt.github.io/dv-musica-library-page/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>UI for Music Library ( Spottify ) </h3>
              <p>An interface for a library of songs, similar to Spotify with crossplatform support on  both (Android,ios, desktop(ubunut and window)).
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Dart</li>
                <li>Provider</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/engida32/React-intro-typescript.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://github.com/engida32/React-intro-typescript" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Pet Adoption site </h3>
              <p>Pet adoption site made with react and typescript while learning frontend devlopement with <a href="https://frontendmasters.com/courses/complete-react-v6/">frontendmasters.</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>reactjs</li>
                <li>Css</li>
                <li>typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>

              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/engida32/Engida-portfolio2.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>

                <a href="https://engida-lishan.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>My  Portfolio Page </h3>
              <p>MY portfolio site built using reactjs,nextjs,typescript and styled-component.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>styled-components</li>
                <li>Typescript</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/engida32/Tesla-2.0.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://tesla-2-0.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Tesla website UI  </h3>
              <p> Tesla website clone using Reactjs, styled-component and redux.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>styled-component</li>
                <li>Redux Toolkit</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>




      </div>
    </Container>
  );
}