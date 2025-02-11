import React from 'react';

const Leader = () => {
    // Define arrays of images, titles, positions, and facebook IDs
    const leaders = [
        {
            name: "Mehedi Hasan Hira",
            position: "General Manager",
            image: "https://imgur.com/Lwk3dOh.jpg",
            facebookId: "profile.php?id=100087167029370"
        },
        {
            name: "Asad Nadim",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/YUZvIF4.jpg",
            facebookId: "nadim015"
        },
        {
            name: "Anika Khanam",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/wzHsryU.jpg",
            facebookId: "entrepreneuranika09"
        },
        {
            name: "Tajul Islam",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/bU5jPNG.jpg",
            facebookId: "MdTajulIslam745"
        },
     {
            name: "Rafidul Islam",
            position: "Senior Sales Officer",
            image: "https://imgur.com/qxJn96W.jpg",
            facebookId: "rafidul.islam.7545"
        }
        ,
        {
            name: "Shajidul Ridoy",
            position: "Sales Officer",
            image: "https://imgur.com/Fmocf0c.jpg",
            facebookId: "profile.php?id=100083633741342"
        }
        ,
        {
            name: "Mohammad Nazim Uddin",
            position: "Sales Officer",
            image: "https://imgur.com/BwUW8iZ.jpg",
            facebookId: "profile.php?id=100069573125851"
        },
        {
            name: "Meherin Akter Meem",
            position: "Sales Officer",
            image: "https://imgur.com/2HkJ7XK.jpg",
            facebookId: "meherinnurshaiba"
        },
        {
            name: "Shaty Akther",
            position: "Sales Officer",
            image: "https://imgur.com/tDosxj6.jpg",
            facebookId: "sathiakther00000"
        },
        {
            name: "Mehedi Hasan",
            position: "Sales Officer",
            image: "https://imgur.com/pMkCyjd.jpg",
            facebookId: "monir.nasrin.56"
        },
        {
            name: "Nazma Akter",
            position: "Sales Officer",
            image: "https://imgur.com/TttcxTX.jpg",
            facebookId: "nazma.akter.868966#"
        },
        {
            name: "Munne Akter",
            position: "Sales Officer",
            image: "https://imgur.com/T5SZLyM.jpg",
            facebookId: "munne.akter.963167"
        }
        // Add more leaders as needed
    ];

    // Function to generate Facebook link with user ID
    const generateFacebookLink = (facebookId) => {
        return `https://www.facebook.com/${facebookId}`;
    };

    const openFacebook = (facebookId) => {
        window.open(generateFacebookLink(facebookId), '_blank');
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-violet-800 text-white col-span-full flex justify-center">
                <h1 className="text-5xl font-bold my-8">My Team</h1>
            </div>
            {leaders.map((leader, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={leader.image} alt={leader.name} className="rounded-xl w-full h-auto" style={{ aspectRatio: '1 / 1' }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{leader.name}</h2>
                        <p>{leader.position}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => openFacebook(leader.facebookId)}>Facebook</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leader;