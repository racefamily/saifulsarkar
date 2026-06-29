import React from "react";

const PreviousJobs = () => {
  const previousCompanies = [
    {
      name: "Anik Trading Corporation",
      position: "Sr. Manager",
      duration: "Jan 2008 - Dec 2012",
      logo: "https://i.imgur.com/gy1X81h.jpg",
    },
    {
      name: "Jeans Arrow Garments LTD",
      position: "HR Officer",
      duration: "Apr 2012 - Aug 2014",
      logo: "https://i.imgur.com/FxGflwq.jpg",
    },
    {
      name: "Apparel Promoters LTD",
      position: "IT Officer (Payroll)",
      duration: "Sep 2014 - Mar 2020",
      logo: "https://i.imgur.com/FxGflwq.jpg",
    },
    {
      name: "Race Family",
      position: "Coordinator",
      duration: "Jan 2018 - Present",
      logo: "https://i.imgur.com/FZH6ECa.png",
    },
    {
      name: "Top Star Fashion LTD",
      position: "HR Officer",
      duration: "Jan 2022 - Mar 2022",
      logo: "https://i.imgur.com/DIdEJRW.jpg",
    },
    {
      name: "Harbour IT & Training Institute",
      position: "Instructor",
      duration: "Jan 2023 - Jun 2025",
      logo: "https://i.imgur.com/FRWpLdP.jpg",
    },
    {
      name: "Fashion Export Int. Ltd",
      position: "Hr Officer",
      duration: "July 2025 - Jun 2026",
      logo: "https://i.imgur.com/DIdEJRW.jpg",
    },
    {
      name: "Smart Tech OMP",
      position: "Director Admin",
      duration: "July 2026 - Present",
      logo: "https://imgur.com/3xNjwwL.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-900">
          Previous Jobs
        </h2>

        <p className="text-gray-500 mt-3">
          My professional journey and work experience
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {previousCompanies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Logo */}
            <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border">
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 object-contain"
                loading="lazy"
              />
            </div>

            {/* Company Name */}
            <h3 className="text-xl font-bold text-gray-800">
              {company.name}
            </h3>

            {/* Position */}
            <p className="text-purple-700 font-medium mt-2">
              {company.position}
            </p>

            {/* Duration */}
            <p className="text-sm text-gray-500 mt-1">
              {company.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousJobs;