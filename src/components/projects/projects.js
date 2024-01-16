import "./projects.css";
import login from "./images/istockphoto-656747800-612x612.jpg";
import thinningImg from './images/Chat-User.png';

const Projects = () => {
  const myStyles = {
    width: "18rem",
  };
  return (
    <div className="projects">
        <div className="upperText">
          <p>PortFoilo</p>
          <div className="line"></div>
        </div>
      <div className="box">
        
        <div class="card" style={myStyles}>
          <img src={login} class="card-img-top card_img" alt="..." />
          <div class="card-body">
            <p class="card-text">Transaction application</p>
          </div>
        </div>
        <div class="card" style={myStyles}>
          <img src={thinningImg} class="card-img-top card_img" alt="..." />
          <div class="card-body">
            <p class="card-text">Real-time chat app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
