import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "./assets/Facebook_Logo.png";
import YoutubeIcon from "./assets/Youtube.png";
import InstagramIcon from "./assets/instagram.jpg";
import XIcon from "./assets/X Logo.png";
import LinkedinIcon from "./assets/Linkden Logo.png";

const NavBar = () => {
  const socialLinks = [
    {
      icon: FacebookIcon,
      alt: "Facebook",
      link: "https://www.facebook.com/sisarkarbd",
    },
    {
      icon: YoutubeIcon,
      alt: "YouTube",
      link: "https://www.youtube.com/channel/UC5WLCK7ObCHGbWCw0gsmHbw",
    },
    {
      icon: InstagramIcon,
      alt: "Instagram",
      link: "https://www.instagram.com/sisarkarbd/",
    },
    {
      icon: XIcon,
      alt: "X",
      link: "https://x.com/bdsaifulsarkar",
    },
    {
      icon: LinkedinIcon,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/sisarkarbd",
    },
  ];

  return (
    <nav className="bg-purple-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Saiful Sarkar</h1>

            <p className="text-sm text-gray-300 mt-1">
              01869296343
            </p>

            <p className="text-sm text-gray-300">
              bdsaifulsarkar@gmail.com
            </p>
          </div>

          {/* Middle Menu */}
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link
                to="/Home"
                className="btn btn-warning text-black font-semibold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/FreeClass"
                className="btn btn-warning text-black font-semibold"
              >
                Free Class
              </Link>
            </li>

            <li>
              <Link
                to="/Event"
                className="btn btn-warning text-black font-semibold"
              >
                Event
              </Link>
            </li>
          </ul>

          {/* Right Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;