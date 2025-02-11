const Sai = () => {
    const saifulImgurLink = "https://imgur.com/177pRNg.jpg";
    const facebookURL = "https://www.facebook.com/saifsolutionbd/";

    // Function to calculate the image width and height dynamically
    const calculateImageSize = () => {
        // Get the device's screen width
        const screenWidth = window.innerWidth;
        // Set the default width and height
        let width = 300; // Default width
        let height = 300; // Default height

        // Calculate the width and height based on the screen width
        if (screenWidth >= 1024) {
            width = 500;
            height = 500;
        } else if (screenWidth >= 768) {
            width = 400;
            height = 400;
        }

        // Return an object with the width and height
        return { width, height };
    };

    // Call the function to get the image size dynamically
    const { width, height } = calculateImageSize();

    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={saifulImgurLink} alt="Saiful Sarkar" className={`rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-8 mx-auto lg:ml-0 w-${width} h-${height}`} style={{ width: `${width}px`, height: `${height}px` }} />
                <div className="text-left lg:text-left ml-4 mr-20 lg:mr-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-fuchsia-600 font-bold leading-tight">Saiful Sarkar</h1>
                    <h1 className="text-lg md:text-xl lg:text-xl text-neutral-950 font-bold mb-4">Professional Freelancer</h1>
                    <p className="text-lg text-gray-700 mt-4">
                    Saiful Sarkar can be the best choice for you to Mentor digital marketing strategy. He can easily teach you about social media marketing, SEO, email marketing and web analytics. Saiful Sarkar helps individuals and businesses achieve their online goals. Join now to enhance your digital marketing skills and stay ahead in the competitive digital landscape.
                    </p>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">Facebook</a>
                </div>
            </div>
        </div>
    );
};

export default Sai;
