import "./portfolio.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import portfolioImg from "../../assets/img/portfolio.jpg";

function Portfolio() {
  return (
    <div>
      <div className="portfolioContainer">
        <h1>Portfolio</h1>
        <div className="portContentContainer">
          <SkipPreviousIcon
            style={{
              cursor: "pointer",
              width: "60px",
              height: "60px",
              borderRadius: 50,
              color: "#fff",
              background: "#E29500",
            }}
          />
          <div className="centerOfPortfolio">
            <div className="portImgConta">
              <img src={portfolioImg} alt="..." />
            </div>
            <div className="portConteConta">
              <h3>Making a website</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptates provident ea. Eligendi ad dolorum corporis dicta at
                atque illo quam saepe quibusdam, laboriosam veniam! Harum odit
                porro error temporibus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore voluptates provident ea.
              </p>
            </div>
          </div>
          <SkipNextIcon
            style={{
              cursor: "pointer",
              width: "60px",
              height: "60px",
              borderRadius: 50,
              color: "#fff",
              background: "#E29500",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
