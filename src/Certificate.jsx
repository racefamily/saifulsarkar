import React from 'react';

const Certificates = () => {
    const imageSources = [
        "https://imgur.com/k30n2mb.jpg", // Portrait
        "https://imgur.com/bUdwDXE.jpg",
        "https://imgur.com/Iz4nKbN.jpg",
        "https://imgur.com/Q70vgbm.jpg",
        "https://imgur.com/4A2OnFI.jpg",
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
                    My Professional <span className="text-blue-600">Certificates</span>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Side: Portrait Image Card */}
                    <div className="lg:col-span-1 flex items-center justify-center">
                        <div className="group w-full p-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="overflow-hidden rounded-xl">
                                <img 
                                    src={imageSources[0]} 
                                    alt="Main Certificate" 
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <p className="mt-4 text-sm font-medium text-gray-500 text-center">Professional Achievement</p>
                        </div>
                    </div>

                    {/* Right Side: Landscape Grid Section */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {imageSources.slice(1).map((src, index) => (
                            <div 
                                key={index} 
                                className="group p-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="overflow-hidden rounded-xl h-48 sm:h-56">
                                    <img 
                                        src={src} 
                                        alt={`Certificate ${index + 2}`} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <p className="mt-3 text-xs font-semibold text-blue-500 uppercase tracking-wider text-center">Verified Course</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certificates;