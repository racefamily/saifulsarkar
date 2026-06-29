import React from 'react';
import FacebookIcon from './assets/Facebook_Logo.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/instagram.jpg';
import xIcon from './assets/X Logo.png';
import LinkdenIcon from './assets/Linkden Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* Section 1: About/Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Saiful <span className="text-blue-500">Sarkar</span></h2>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-blue-500">📞</span> 01869-296343
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-blue-500">✉️</span> bdsaifulsarkar@gmail.com
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links (Modern Touch) */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-widest text-xs">Quick Navigation</h3>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="/Home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="/Event" className="hover:text-blue-500 transition-colors">Events</a></li>
              <li><a href="/FreeClass" className="hover:text-blue-500 transition-colors">Free Class</a></li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-widest text-xs">Social Presence</h3>
            <div className="flex gap-5">
              {[
                { src: FacebookIcon, url: "https://www.facebook.com/sisarkarbd" },
                { src: YoutubeIcon, url: "https://www.youtube.com/channel/UC5WLCK7ObCHGbWCw0gsmHbw" },
                { src: InstagramIcon, url: "https://www.instagram.com/sisarkarbd/" },
                { src: xIcon, url: "https://x.com/bdsaifulsarkar" },
                { src: LinkdenIcon, url: "https://www.linkedin.com/in/sisarkarbd" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <img src={social.src} alt="SocialIcon" className="w-5 h-5 object-contain brightness-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © {currentYear} | Designed & Developed by <span className="text-gray-300 font-semibold">Saiful Sarkar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;