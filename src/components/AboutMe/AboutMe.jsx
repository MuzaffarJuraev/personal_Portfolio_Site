import "./aboutme.css";
import CreateIcon from "@mui/icons-material/Create";
import AppsIcon from "@mui/icons-material/Apps";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CameraFrontRoundedIcon from "@mui/icons-material/CameraFrontRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";

const AboutMe = () => {
  return (
    <div>
      <div className="skillsContainer">
        <div className="skills">
          <CreateIcon style={{ color: "#00C4F0", fontSize: "60px" }} />
          <p>Product Design</p>
        </div>
        <div className="skills">
          <h1 style={{ color: "#00C4F0", fontSize: "50px", fontWeight: "300" }}>
            UX/UI
          </h1>
          <p>UX/UI Design</p>
        </div>
        <div className="skills">
          <AppsIcon style={{ color: "#00C4F0", fontSize: "60px" }} />
          <p>Icon Design</p>
        </div>
        <div className="skills">
          <BrandingWatermarkIcon
            style={{ color: "#00C4F0", fontSize: "60px" }}
          />
          <p>Logo Design</p>
        </div>
      </div>
      <div className="skillsContainer">
        <div className="skills">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "#00C4F0", fontSize: "60px" }}
          />
          <p>Backend</p>
        </div>
        <div className="skills">
          <CameraFrontRoundedIcon
            style={{ color: "#00C4F0", fontSize: "60px" }}
          />
          <p>Frontend</p>
        </div>
        <div className="skills">
          <AutoAwesomeMotionRoundedIcon
            style={{ color: "#00C4F0", fontSize: "60px" }}
          />
          <p>Motion</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
