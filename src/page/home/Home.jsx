// import React, { forwardRef } from 'react'
// import './Home.css'
// import Banner from './sections/banner/Banner'
// import Faqs from './sections/Faqs/Faq'
// import About from './sections/About/About'
// import GoogleMap from './sections/GoogleMap/GoogleMap'
// import SliderSection from './sections/Slider/SliderSection'
// import JobSeeker from './sections/JobSeeker/JobSeeker'
// import Cards from './sections/cards/Cards'
// import Description from './sections/description/Description'
// import Client from './sections/client/Client'
// import Blogs from './sections/blogs/Blogs'
// import Ourservices from './sections/ourservices/Ourservices'
// import ServiceHome from './sections/service/ServiceHome'

// const Home = forwardRef((props, ref) => {
//     return (
//         <div className='home' id="home-section" ref={ref}>
//             <Banner />
//             <ServiceHome />
//             <Description />
//             {/* <About /> */}
//             <Client />
//             <Blogs />
//             <GoogleMap />
//         </div>
//     )
// })

// export default Home

import React from "react";
// NOTE: Remove this import if Home.css is not present
import "./Home.css";
import Banner from "./sections/banner/Banner";
import ServiceHome from "./sections/service/ServiceHome";
import Description from "./sections/description/Description";
import { motion } from 'framer-motion';

export default function Home() {
  
  return (
    <div className="app">
      {/* <div className="notification">URGENT NOTIFICATION REAL CONTINUE</div> */}
      <div className="notification">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="whitespace-nowrap text-sm font-medium"
        >
          &gt;&gt; URGENT NOTIFICATION REAL CONTINUE &gt;&gt; URGENT
          NOTIFICATION REAL CONTINUE &gt;&gt; URGENT NOTIFICATION REAL CONTINUE
        </motion.div>
      </div>
      <Banner />
      <ServiceHome />
      <Description />
    </div>
  );
}
