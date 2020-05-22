import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Service from "../components/Services";
import { Link } from "react-router-dom";
import FeaturedRoom from '../components/FeaturedRooms';
 

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" 
            subtitle="deluxe rooms starting at Rs. 2000">
                 <Link to="/rooms" className='btn-primary'>
            our rooms
            </Link>
            </Banner>
           
        </Hero>
       <Service></Service>
       <FeaturedRoom></FeaturedRoom> 
         </>
    )
}
 