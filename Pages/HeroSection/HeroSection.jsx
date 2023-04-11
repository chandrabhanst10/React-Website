import React from "react";
import "./HeroSection.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
const HeroSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  lightTextDesc,
  description,
  buttonLabel,
  src,
  alt,
}) => {
  return (
    <div
      className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
    >
      <div className="container">
        <div
          className="row home__hero-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "hero__hero-subtitle dark"
                }
              >
                {description}
              </p>
              <Link to="sign-up">
                <Button buttonSize="btn--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src={src} alt={alt} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
