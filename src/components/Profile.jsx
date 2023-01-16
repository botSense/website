import React from "react";
import Sam from "../assests/sam.jpeg";
import Ron from "../assests/ron.jpeg";
import { AiFillInstagram } from "react-icons/ai";

const Profile = () => {
  return (
    <div
      name="trainers"
      className="flex justify-center items-center flex-col   gap-10 container"
    >
      <h1 className="text-gray-300 text-4xl font-bold inline border-b-4 border-yellow-600">
        Trainers
      </h1>
      <div className="flex sm:flex-row flex-col gap-10 justify-center items-center">
        <div class="card">
          <div class="content">
            <div class="photo">
              <img src={Ron} alt="" />
            </div>
            <div class="details">
              <span class="name">Rhonak</span>
              <span class="place">Moodubidri</span>
              <p class="job">
                IOT Circuit Trainer
                <br /> <br />
                Alvas College Moodubidri
              </p>
            </div>
            {/* <div class="buttons">
              <button>Message</button>
              <button>Follow Me!</button>
            </div> */}
          </div>
          <div class="social">
            <a
              href="https://www.instagram.com/rhonak/?igshid=YmMyMTA2M2Y%3D"
              target="blank"
            >
              <AiFillInstagram size={35} />
            </a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <div class="photo">
              <img src={Sam} alt="" />
            </div>
            <div class="details">
              <span class="name">Sam George</span>
              <span class="place">Kerala</span>
              <p class="job">
                IOT Code Trainer
                <br /> <br />
                Alvas College Moodubidri
              </p>
            </div>
            {/* <div class="buttons">
              <button>Message</button>
              <button>Follow Me!</button>
            </div> */}
          </div>
          <div class="social">
            <a
              href="https://www.instagram.com/__sam_george__/?igshid=OGQ2MjdiOTE="
              target="blank"
            >
              <i>
                <AiFillInstagram size={35} />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
