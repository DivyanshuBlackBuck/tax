import React, { forwardRef, useEffect } from 'react'
import './Home.css'
import Banner from './sections/banner/Banner'
import Faqs from './sections/Faqs/Faq'
import About from './sections/About/About'
import GoogleMap from './sections/GoogleMap/GoogleMap'
import SliderSection from './sections/Slider/SliderSection'
import JobSeeker from './sections/JobSeeker/JobSeeker'
import Cards from './sections/cards/Cards'
import Description from './sections/description/Description'
import Client from './sections/client/Client'
import Blogs from './sections/blogs/Blogs'
import Ourservices from './sections/ourservices/Ourservices'
import ServiceHome from './sections/service/ServiceHome'
import { useBlogsRedux } from '../../redux/reduxHooks'


const Home = forwardRef((props, ref) => {
    const { getService, getServiceResponse, getServiceError, selectedService } = useBlogsRedux()
   
    useEffect(() => {
        getService()
    }, []);


    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            <ServiceHome />
            <Description />
            {/* <About /> */}
            <Client />
            <Blogs />
            <GoogleMap />
        </div>
    )
})

export default Home