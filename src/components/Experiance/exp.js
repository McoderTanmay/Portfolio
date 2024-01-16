import "./exp.css";
import "./styles.css";
//Swiper js
// import "swiper/css";
// import "swiper/css/navigation";

//Images
import famark from "./Images/icon-128.png";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation } from "swiper/modules";

const Exp = () => {
  return (
    <>
      <div className="exp">
        <h2>Experience</h2>
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="compImg"><img src={famark} alt="Famark" /></div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper> */}
        <div className="cards-cover pb-5">
          <div className="card exp-card">
            <div className="Lcompany">
              <h3>LogicalLoops</h3>
            </div>
            <svg
              width="140"
              height="140"
              className="Lcompany-logo"
              viewBox="0 0 63 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_2_19)">
                <circle cx="30" cy="47.9996" r="13.2156" fill="black"></circle>
                <path
                  d="M49.6242 74.2203C53.4902 74.2203 56.6242 71.0863 56.6242 67.2203V4.82263C56.6242 4.27035 56.1765 3.82263 55.6242 3.82263C55.0719 3.82263 54.6242 4.27035 54.6242 4.82263V67.2203C54.6242 69.9817 52.3856 72.2203 49.6242 72.2203H16.7843C16.232 72.2203 15.7843 72.668 15.7843 73.2203C15.7843 73.7726 16.232 74.2203 16.7843 74.2203H49.6242Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.37576 28.7789C3.37576 24.9129 6.50977 21.7789 10.3758 21.7789H43.2156C43.7679 21.7789 44.2156 22.2266 44.2156 22.7789C44.2156 23.3312 43.7679 23.7789 43.2156 23.7789H10.3758C7.61434 23.7789 5.37576 26.0175 5.37576 28.7789V91.1774C5.37576 91.7297 4.92805 92.1774 4.37576 92.1774C3.82348 92.1774 3.37576 91.7297 3.37576 91.1774V28.7789Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_dd_2_19"
                  x="0.375763"
                  y="0.822632"
                  width="62.2484"
                  height="97.3548"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="2" dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_19"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="-1" dy="-1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_2_19"
                    result="effect2_dropShadow_2_19"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_2_19"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div className="card-body mt-5">
              <h4 className="card-title">Software Developer Trainee</h4>
              <h5 className="card-title">November 2022- April 2023</h5>
              <p className="card-text">
                <ul>
                  <li>
                    Engaged in demo projects to grasp the foundational concepts
                    of web development, fostering a strong understanding of the
                    fundamentals
                  </li>
                  <li>
                    Actively participated in live projects, gaining valuable
                    real-world experience. Acquired proficiency in React by
                    working on demo projects, enhancing my skills in front-end
                    development
                  </li>
                  <li>
                    Developed effective collaboration skills by working closely
                    with teams on various projects.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card exp-card">
            <div className="company">
              <h3>Famark</h3>
            </div>
            <img src={famark} class="card-img-top company-logo" alt="..." />
            <div className="card-body mt-5">
              <h4 className="card-title">Software Developer Intern</h4>
              <h5 className="card-title">June 2023</h5>
              <p className="card-text">
                <ul>
                  <li>
                    Acquired practical, hands-on experience with a company's
                    cloud platform
                  </li>
                  <li>
                    Performed crud operations like update, delete , create and
                    find operations on pre existing data on cloud
                  </li>
                  <li>
                    Collaborated effectively within a team to achieve project
                    objectives. Played a pivotal role in creating an e-commerce
                    platform for an NGO specializing in the sale of ancient
                    artifacts, employing technologies such as Node.js, Express,
                    HTML, CSS, and JavaScript
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exp;
