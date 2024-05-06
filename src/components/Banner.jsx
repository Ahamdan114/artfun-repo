import React from "react";
import Image from "next/image";

import "@/styles/Banner.css"
import fetchData from "@/assets/profile.js"

const Banner = () => {
    const {banner} = fetchData;
    return (
        <div className="banner_container container">
            <Image className="unit_slide" src={banner} alt={`Slide`} />
        </div>
    );
};

export default Banner;
