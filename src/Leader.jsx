import React from "react";

const Leader = () => {
  const leaders = [
    {
      name: "Asad Nadim",
      position: "Asst. Sales Manager",
      image: "https://i.imgur.com/YUZvIF4.jpg",
      facebookId: "nadim015",
    },
    {
      name: "Anika Khanam",
      position: "Asst. Sales Manager",
      image: "https://i.imgur.com/wzHsryU.jpg",
      facebookId: "entrepreneuranika09",
    },
    {
      name: "Tajul Islam",
      position: "Asst. Sales Manager",
      image: "https://i.imgur.com/dQE40fA.jpg",
      facebookId: "MdTajulIslam745",
    },
    {
      name: "Shajidul Ridoy",
      position: "Sales Officer",
      image: "https://i.imgur.com/Fmocf0c.jpg",
      facebookId: "profile.php?id=100083633741342",
    },
    {
      name: "Mohammad Nazim Uddin",
      position: "Sales Officer",
      image: "https://i.imgur.com/BwUW8iZ.jpg",
      facebookId: "profile.php?id=100069573125851",
    },
    {
      name: "Meherin Akter Meem",
      position: "Sales Officer",
      image: "https://i.imgur.com/2HkJ7XK.jpg",
      facebookId: "meherinnurshaiba",
    },
    {
      name: "Mehedi Hasan",
      position: "Sales Officer",
      image: "https://i.imgur.com/pMkCyjd.jpg",
      facebookId: "monir.nasrin.56",
    },
    {
      name: "Nazma Akter",
      position: "Sales Officer",
      image: "https://i.imgur.com/ZB63ZrY.jpg",
      facebookId: "nazma.akter.868966",
    },
    {
      name: "Munne Akter",
      position: "Sales Officer",
      image: "https://i.imgur.com/T5SZLyM.jpg",
      facebookId: "munne.akter.963167",
    },
  ];

  const generateFacebookLink = (facebookId) =>
    `https://www.facebook.com/${facebookId}`;

  return (
    <section className="py-10 px-4">
      {/* Heading */}
      <div className="bg-violet-800 text-white rounded-xl py-6 mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">My Team</h1>
      </div>

      {/* Leader Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full aspect-square object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="px-4 pb-5 text-center">
              <h2 className="text-lg font-bold">{leader.name}</h2>

              <p className="text-gray-500 mb-4">{leader.position}</p>

              <a
                href={generateFacebookLink(leader.facebookId)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                View Facebook
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leader;