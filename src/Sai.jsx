const Sai = () => {
    const saifulImgurLink = "https://i.imgur.com/ZFWBM9i.jpg"; // Direct link to the image on Imgur
    const facebookURL = "https://www.facebook.com/bdsaifulsarkar/";

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
                <img src={saifulImgurLink} alt="Race Family" className={`rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-8 mx-auto w-${width} h-${height}`} />
                <div className="text-center lg:text-left ml-4 mr-20">
                    <h1 className="text-5xl text-fuchsia-600 font-bold">I am <br /> Saiful Islam.</h1>
                    <h1 className="text-2xl text-neutral-950 font-bold">CEO <br /> Harbour IT </h1>
                    <p className="py-6">
                        I have been working with digital marketing for 5 years.
                    </p>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Facebook</a>
                </div>
            </div>
        </div>
    );
};

export default Sai;
