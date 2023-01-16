import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen flex flex-col justify-center items-center text-center p-2 gap-5 text-gray-300"
    >
      <Zoom>
        <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-yellow-600">
          Work
        </p>
      </Zoom>

      <div>
        <Fade>
          <li>
            IoT based project using ESP8266 and IFTTT(for BCA fest on the
            college. This was the stage decorative prepared for the college
            fest.
            <br />
            <a
              href="https://www.instagram.com/tv/Cbjn5K3AjSl/?utm_source=ig_web_copy_link)"
              target="blank"
              className="text-blue-600"
            >
              Click Here to View The Live Event Video
            </a>
          </li>

          <li>
            Room automation using ESP8266, Blynk, IFTTT and google assistant.
          </li>
          <li>
            neStart- An IoT based device which can control a 3 phase water pump
            anywhere from the globe using ESP32, GSM SIM800
          </li>
        </Fade>
      </div>

      <iframe
        className="w-full h-full md:h-[50vh] md:w-[50vw]"
        src="https://drive.google.com/file/d/1-aN0loumXIBhKHSPnr8GUiuUsYqEm3bT/preview"
        allow="autoplay"
        title="video1"
      ></iframe>
    </div>
  );
};

export default Work;
