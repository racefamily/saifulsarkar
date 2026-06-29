import React from "react";
import NavBar from "./NavBar";

const Freeclass = () => {
  const videos = [
    {
      topic: "Job",
      link: "https://www.youtube.com/watch?v=eNszgsxEj14",
    },
    {
      topic: "Iron Lady of Pakistan",
      link: "https://www.youtube.com/watch?v=meOWV1w2GE8",
    },
    {
      topic: "Free Class",
      link: "https://www.youtube.com/watch?v=bZNsHugQgz4",
    },
    {
      topic: "Tajul Vhi",
      link: "https://www.youtube.com/watch?v=xxeN40KQyZY",
    },
    {
      topic: "Sonu Sharma Attitude",
      link: "https://www.youtube.com/watch?v=foWu5HFFn4M",
    },
    {
      topic: "Facebook Video",
      link: "https://www.facebook.com/reel/1165142251812561",
    },
    {
      topic: "Facebook Reels",
      link: "https://www.facebook.com/reel/1361129684910634",
    },
  ];

  const getEmbedLink = (link) => {
    if (link.includes("youtube.com")) {
      return link.replace("watch?v=", "embed/");
    }

    if (link.includes("facebook.com")) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        link
      )}&show_text=false`;
    }

    return "";
  };

  const getAspectRatio = (link) => {
    // Facebook Reels → Vertical
    if (link.includes("/reel/")) {
      return "177.77%"; // 9:16
    }

    return "56.25%"; // 16:9
  };

  return (
    <div>
      <NavBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Video Container */}
            <div
              className="relative w-full"
              style={{ paddingTop: getAspectRatio(video.link) }}
            >
              <iframe
                title={`Video ${index + 1}`}
                src={getEmbedLink(video.link)}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">
                Class {index + 1}
              </h2>

              <p className="text-gray-600">{video.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freeclass;