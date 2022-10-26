import { Container } from "./styles";

import profileImage from "../../assets/engida-pic.JPG";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import tailwind from "../../assets/tailwind.png";
import typescriptIcon from "../../assets/typescript-icon.svg";
import flutter from "../../assets/flutter-svgrepo-com.svg";
import dart from "../../assets/dart-svgrepo-com.svg";
import nextjs from "../../assets/nextjs-icon-svgrepo-com.svg";
import redux from "../../assets/redux.svg";
import figma from "../../assets/figma-1.svg";
import { Box, Stepper, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            My name is Engida Lishan, and I'm a Software engineer with a passion
            for coding. I'm driven by a desire to provide solutions and make a
            positive influence in people's lives while also engaging myself. As
            a programmer, I was able to broaden my skills as Frontend developer,
            mobile app developer as well as UI/UX design
          </p>
        </ScrollAnimation>

        {/* <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Develop crossplatform Mobile App using Flutter which is used to
            build cross platform applications for Android, iOS, Linux, Mac,
            Windows and the web from a single codebase .
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I Develop Web application with popular JavaScript library ,ReactJs
            as well as fullstack web app with NextJs using different CSS and UI
            framework such as Material UI , Ant design and styled-components.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a results oriented individual that goes above and beyond to
            achieve my goals ..
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my top skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>{" "}
          <div
            className="hability"
            style={{
              padding: 2,
            }}
          >
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={figma} alt="Figma" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>{" "}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={nextjs} alt="Nextjs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={redux} alt="Redux toolkit" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={flutter} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={dart} alt="Vue" />
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              my: 2,
            }}
          >
            <Typography
              sx={{
                color: "green",
                fontWeight: "bold",
              }}
              variant="h2"
              color="initial"
            >
              Work experiences
            </Typography>
            <Timeline
              sx={
                {
                  // transform: "rotate(120deg)",
                }
              }
              position="alternate"
            >
              <TimelineItem
                sx={{
                  // border: "1px solid red",
                  // alignItems: "center",
                  my: 1,
                }}
              >
                <TimelineOppositeContent>
                  <Typography
                    sx={{
                      color: "#23ce6b",
                      fontWeight: "bolder",
                      px: 3,
                      textDecoration: "underline",
                    }}
                    variant="h4"
                    color="initial"
                  >
                    Twof Capital
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "#23ce6b",
                      margin: "auto 0",
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      bgColor: "yellow",
                      height: 8,
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      color: "#23ce6b",
                    }}
                  >
                    <Typography>Frontend Developer</Typography>
                    <Typography>March 2022 - Now </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  // border: "1px solid red",
                  // alignItems: "center",
                  my: 1,
                }}
              >
                <TimelineOppositeContent>
                  <Typography
                    sx={{
                      color: "blue",
                      fontWeight: "bold",
                      px: 3,
                    }}
                    variant="h4"
                    color="initial"
                  >
                    Gebeya
                    {/* <br /> */}
                    <span
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      {" "}
                      freelance
                    </span>
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      margin: "auto 0",
                    }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box>
                    <Typography> Junior Mobile Developer</Typography>
                    <Typography variant="h5">September 2021</Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
              // sx={{
              //   py: 3,
              // }}
              >
                <TimelineOppositeContent>
                  <Typography
                    sx={{
                      color: "blue",
                      fontWeight: "bold",
                      px: 3,
                      mt: 1,
                    }}
                    variant="h5"
                    color="initial"
                  >
                    National Election Board of Ethiopia
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      margin: "auto 0",
                    }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box>
                    <Typography> ICT Team Leader</Typography>
                    <Typography variant="h5">
                      January 2021 - June 2021
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      color: "green",
                    }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="profile image" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
