import React from "react";
import ReactDOM from "react-dom/client"; // 'client' থেকে ইমপোর্ট করতে হবে
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Freeclass from "./Freeclass";
import OurTour from "./Event";

// React 18 এর নতুন নিয়ম অনুযায়ী root তৈরি করা
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /Home এ গেলেও যাতে Home কম্পোনেন্ট দেখায় */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/freeclass" element={<Freeclass />} />
        <Route path="/event" element={<OurTour />} />
        
        {/* যদি কেউ ভুল লিঙ্কে যায় তার জন্য একটি 404 পেজ বা হোমপেজে ফেরত পাঠানো */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);