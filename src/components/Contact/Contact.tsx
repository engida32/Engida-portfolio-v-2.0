import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>If you saw my potential or want to talk to me, do not hesitate to contact me .</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:engida32lishan@gmail.com">engida32lishan@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+251932433954">(+251) 932433954</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}