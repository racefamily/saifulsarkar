import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/40 p-2 rounded-full cursor-pointer hover:bg-black/70"
            onClick={onClick}
        >
            <FaArrowRight size={20} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/40 p-2 rounded-full cursor-pointer hover:bg-black/70"
            onClick={onClick}
        >
            <FaArrowLeft size={20} />
        </div>
    );
};

const Sai = () => {
    const images = [
        "https://imgur.com/177pRNg.jpg",
        "https://imgur.com/3qdfuo4.jpg",
        "https://imgur.com/uclVlbz.jpg",
        "https://imgur.com/CTVNqJa.jpg"
    ];

    const facebookURL = "https://www.facebook.com/saifsolutionbd/";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="w-full max-w-md lg:max-w-lg relative">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="rounded-lg shadow-2xl w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
                            />
                        ))}
                    </Slider>
                </div>
                <div className="text-left lg:text-left ml-4 mr-6 lg:mr-0 mt-6 lg:mt-0 max-w-xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-fuchsia-600 font-bold leading-tight">Saiful Sarkar</h1>
                    <h2 className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-bold mb-4">
                        Professional Freelancer
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mt-4">
                        Saiful Sarkar can be the best choice for you to mentor digital marketing strategy. He can easily teach you about social media marketing, SEO, email marketing and web analytics. Saiful Sarkar helps individuals and businesses achieve their online goals. Join now to enhance your digital marketing skills and stay ahead in the competitive digital landscape.
                    </p>
                    <a
                        href={facebookURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-5"
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sai;