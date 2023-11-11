import Nav from "../Navbar/nav";
import "./page1.css";
import Typewriter from "typewriter-effect";
import myImage from "./port-removebg-preview (1) 1.png";

const Page1 = () => {
  return (
    <>
      <div className="page1">
        <Nav></Nav>
        <div className="name">
          <p className="upper">Hello there i'm</p>
          <p className="middle">Tanmay Sontakke </p>
          <div className="typeWr">
            <Typewriter
              options={{
                strings: ["Software developer", "Web developer","Competitive programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="img">
          <img src={myImage} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Page1;
