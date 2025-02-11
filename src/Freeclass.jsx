import React from "react";
import NavBar from "./NavBar";

const Freeclass = () => {
  // Define an array of video links
  const videoLinks = [
    "https://www.youtube.com/watch?v=eNszgsxEj14",
    "https://www.youtube.com/watch?v=meOWV1w2GE8",
    "https://www.youtube.com/watch?v=bZNsHugQgz4",
    "https://www.youtube.com/watch?v=xxeN40KQyZY",
    "https://www.youtube.com/watch?v=foWu5HFFn4M",
    "https://www.facebook.com/reel/1165142251812561", // Facebook Reels Video
    "https://www.facebook.com/reel/1361129684910634",
  ];

  // Define an array of topics for each video
  const videoTopics = [
    "Job",
    "Iron Lady of Pakistan",
    "Free Class",
    "Tajul Vhi",
    "Sonu Sharma Attitude",
    "Facebook Video",
    "Facebook Reels",
  ];

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Map through the video links array and render each video */}
        {videoLinks.map((link, index) => {
          let embedLink = "";
          let aspectRatio = "56.25%"; // Default 16:9

          if (link.includes("youtube.com")) {
            embedLink = link.replace("watch?v=", "embed/");
          } else if (link.includes("facebook.com")) {
            embedLink = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
              link
            )}&show_text=false&width=500`;

            // Check if it's a Reel (Reels have 'reel' in URL)
            if (link.includes("/reel/")) {
              aspectRatio = "177.77%"; // 9:16 ratio for Facebook Reels
            }
          }

          return (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              {/* Embed Video */}
              <div className="relative w-full" style={{ paddingTop: aspectRatio }}>
                <iframe
                  title={`Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Heading */}
              <h2 className="mt-2 text-xl font-semibold">{`Class ${index + 1}`}</h2>
              {/* Video Topic */}
              <p>{videoTopics[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Freeclass;
