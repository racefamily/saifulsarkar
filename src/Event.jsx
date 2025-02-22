import React from 'react';
import NavBar from './NavBar';

const OurTour = () => {
    // Define an array of images
    const imageSources = [
        "https://imgur.com/3p0ZMvH.jpg",
        "https://imgur.com/8oTEwiF.jpg",
        "https://imgur.com/OSalnXg.jpg",
        "https://imgur.com/BnKfLsS.jpg",
        "https://imgur.com/PGgfvd8.jpg",
        "https://imgur.com/LYzgCQM.jpg",
        "https://imgur.com/vUJYLHV.jpg",
        "https://imgur.com/CnsOq6c.jpg",
        "https://imgur.com/QEuevdu.jpg",
        "https://imgur.com/cn0ZM1O.jpg",
        "https://imgur.com/afGc6Ql.jpg",
        "https://imgur.com/NcBFPlv.jpg",
        "https://imgur.com/9JaLmWe.jpg",
        "https://imgur.com/i0wv0pF.jpg",
        "https://imgur.com/dpiD23a.jpg",
        "https://imgur.com/3cXBcoL.jpg",
        "https://imgur.com/burAgt4.jpg",
        "https://imgur.com/q3JbOQv.jpg",
        "https://imgur.com/AoSgj8Q.jpg",
        "https://imgur.com/hQseq1e.jpg",
        "https://imgur.com/J8DG2qG.jpg",
        "https://imgur.com/BQ9zJvn.jpg",
        "https://imgur.com/vFRYQZO.jpg",
    ];

    // Define an array of topics for each image
    const imageTopics = [
        "সেন্টমার্টিন ট্যুর",
        "কক্সবাজার ট্যুর",
        "বান্দরবান ট্যুর",
        "ফয়েজলেক ট্যুর",
        "মিটিং",
        "মিটিং",
        "ইফতার পার্টি",
        "ইফতার পার্টি",
        "গেট টুগেদার",
        "গেট টুগেদার",
        "সেলিব্রেশন",
        "সেলিব্রেশন",
        "সেলিব্রেশন",
        "কক্সবাজার",
        "কক্সবাজার",
        "কক্সবাজার",
        "কক্সবাজার",
        "এম্ব্রোসিয়া হোটেল",
        "সেলিব্রেশন-২০২৪",
        "কো-অর্ডিনেটর",
        "রেইস পরিবার",
        "সেলিব্রেশন প্রেগ্রাম",
        "রেইস পরিবার",
    ];

    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Map through the image sources array and render each image */}
                {imageSources.map((src, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg">
                        {/* Display image */}
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" style={{ aspectRatio: '16 / 9' }} />
                        {/* Image Topic */}
                        <p className="mt-2 text-xl font-semibold">{imageTopics[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTour;