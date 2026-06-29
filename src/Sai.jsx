import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition duration-300"
    >
      <FaArrowRight size={18} />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition duration-300"
    >
      <FaArrowLeft size={18} />
    </button>
  );
};

const Sai = () => {
  const images = [
    "https://i.imgur.com/q7dhlIa.jpg",
    "https://i.imgur.com/1QQfr3t.jpg",
    "https://i.imgur.com/177pRNg.jpg",
    "https://i.imgur.com/3qdfuo4.jpg",
    "https://i.imgur.com/uclVlbz.jpg",
    "https://i.imgur.com/CTVNqJa.jpg",
  ];

  const facebookURL = "https://www.facebook.com/saifulsarkar.hr/";

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-gradient-to-br from-purple-100 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          
          {/* Left Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fuchsia-700 leading-tight">
              Saiful Sarkar
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-3">
              Professional Freelancer & Digital Marketing Trainer
            </h2>

            <p className="text-gray-600 leading-8 mt-6 text-justify lg:text-left">
              Saiful Sarkar can be the best choice for mentoring
              digital marketing strategy. He teaches Social Media
              Marketing, SEO, Email Marketing, and Web Analytics
              professionally. He helps individuals and businesses
              achieve their online goals and build strong digital
              careers.
            </p>

            <div className="mt-8">
              <a
                href={facebookURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                <FaFacebook />
                Follow on Facebook
              </a>
            </div>
          </div>

          {/* Right Slider Section */}
          <div className="flex-1 w-full max-w-xl relative overflow-hidden rounded-3xl shadow-2xl bg-white/40 backdrop-blur-sm border border-white/20">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="outline-none">
                  {/* কন্টেইনারের হাইট ফিক্সড রাখা হয়েছে এবং ডিসপ্লে ফ্লেক্স করা হয়েছে */}
                  <div className="flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] p-2">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain drop-shadow-md" 
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sai;