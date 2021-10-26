import "./about.css";
import manImg from "../../assets/img/personImg.png";

const About = () => {
  return (
    <div>
      <div className="aboutContainer">
        <div className="contentContainer">
          <h2>HELLO</h2>
          <h1>
            I'M GLEB <br />
            KONSTRUBOV
          </h1>
          <p>
            I've been doing web, front-end and <br /> back-end development for a
            year now. Do you <br /> need a web designe , site layout , or maybe
            a <br /> turnkey website ? Then contact me.
          </p>
          <button>CONTACT ME</button>
        </div>
        <div className="imgContainer">
          <div className="img">
            <img src={manImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
