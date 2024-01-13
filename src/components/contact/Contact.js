import "./contact.css";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="outer">
        <div className="inner">
          <h3>CONTACT</h3>
          <div className="contact">
            <div className="left">
              <h4>Drop me a Massage</h4>
              <p>
                if you like my work and want to hire me you can drop me a
                Massage{" "}
              </p>
              <div className="outer-box">
                <div className="phone-box">
                  <LuPhone size={"35px"} />
                </div>
                <div className="icon-text">
                  <p>+91 7058759096</p>
                </div>
              </div>
              <div className="outer-box">
                <div className="phone-box">
                  <MdOutlineEmail size={"35px"} />
                </div>
                <div className="icon-text">
                  <p>tanmaysontakke99@gmail.com</p>
                </div>
              </div>
              <div className="outer-box">
                <div className="phone-box">
                  <GrLocation size={"35px"} />
                </div>
                <div className="icon-text">
                  <p>Nagpur, Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="right">
              <form className=" email-drop right-form">
                <div className="mb-3 email-drop">
                  <input
                    type="text"
                    className="form-control"
                    id="nameInputName1"
                    aria-describedby="nameHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 email-drop">
                  <textarea
                    className="textArea-massgae"
                    name="massageInputMassgae"
                    id="massage"
                    cols="34"
                    rows="4"
                    placeholder="Massage"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="line"></div>
          <div className="footer">
            <p>Tanmay Sontakke</p>
            <div className="social-media">
              <a href="">
                <LuInstagram size={"35px"} />
              </a>
              <a href="">
                <FaLinkedin size={"35px"} />
              </a>
              <a href="">
                <FaGithub size={"35px"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
