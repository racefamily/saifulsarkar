import React from 'react';
import NavBar from './NavBar';

const OurTour = () => {
    // ইমেজ এবং টপিককে একটি অবজেক্টে নিয়ে আসা হয়েছে যাতে ম্যানেজ করা সহজ হয়
    const tourData = [
        { src: "https://imgur.com/3p0ZMvH.jpg", topic: "সেন্টমার্টিন ট্যুর" },
        { src: "https://imgur.com/8oTEwiF.jpg", topic: "কক্সবাজার ট্যুর" },
        { src: "https://imgur.com/OSalnXg.jpg", topic: "বান্দরবান ট্যুর" },
        { src: "https://imgur.com/BnKfLsS.jpg", topic: "ফয়েজলেক ট্যুর" },
        { src: "https://imgur.com/PGgfvd8.jpg", topic: "মিটিং" },
        { src: "https://imgur.com/LYzgCQM.jpg", topic: "মিটিং" },
        { src: "https://imgur.com/vUJYLHV.jpg", topic: "ইফতার পার্টি" },
        { src: "https://imgur.com/CnsOq6c.jpg", topic: "ইফতার পার্টি" },
        { src: "https://imgur.com/QEuevdu.jpg", topic: "গেট টু গেদার" },
        { src: "https://imgur.com/cn0ZM1O.jpg", topic: "গেট টু গেদার" },
        { src: "https://imgur.com/afGc6Ql.jpg", topic: "সেলিব্রেশন" },
        { src: "https://imgur.com/NcBFPlv.jpg", topic: "সেলিব্রেশন" },
        { src: "https://imgur.com/9JaLmWe.jpg", topic: "সেলিব্রেশন" },
        { src: "https://imgur.com/i0wv0pF.jpg", topic: "কক্সবাজার" },
        { src: "https://imgur.com/dpiD23a.jpg", topic: "কক্সবাজার" },
        { src: "https://imgur.com/3cXBcoL.jpg", topic: "কক্সবাজার" },
        { src: "https://imgur.com/burAgt4.jpg", topic: "কক্সবাজার" },
        { src: "https://imgur.com/q3JbOQv.jpg", topic: "এম্ব্রোসিয়া হোটেল" },
        { src: "https://imgur.com/AoSgj8Q.jpg", topic: "সেলিব্রেশন-২০২৪" },
        { src: "https://imgur.com/hQseq1e.jpg", topic: "কো-অর্ডিনেটর" },
        { src: "https://imgur.com/J8DG2qG.jpg", topic: "রেইস পরিবার" },
        { src: "https://imgur.com/BQ9zJvn.jpg", topic: "সেলিব্রেশন প্রেগ্রাম" },
        { src: "https://imgur.com/vFRYQZO.jpg", topic: "রেইস পরিবার" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <NavBar />
            
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 border-blue-500 w-fit mx-auto pb-2">
                    আমাদের ভ্রমণ ও ইভেন্ট গ্যালারি
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tourData.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="overflow-hidden aspect-video">
                                <img 
                                    src={item.src} 
                                    alt={item.topic} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            
                            {/* Topic Content */}
                            <div className="p-4">
                                <p className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                                    {item.topic}
                                </p>
                                <div className="w-10 h-1 bg-blue-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTour;