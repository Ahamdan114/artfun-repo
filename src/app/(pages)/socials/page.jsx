import React from "react";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import EventCard from "@/components/EventCard";

import fetchData from "@/assets/profile.js";
import "@/app/(pages)/socials/page.css";

const page = () => {
    const { socials } = fetchData;
    const enoughCategoriesSpace = true;
    
    return (
        <div className="container">
            <Banner />
            <div className="socials_container">
                <div className="page_presentation">
                    <h1 className="title_list">Socials</h1>
                    <div className="event_list">
                        {socials.map(({ id, img, shape, title, description, date }) => (
                            <EventCard
                                key={id}
                                img={img}
                                shape={shape}
                                title={title}
                                description={description}
                                date={date}
                            />
                        ))}
                    </div>
                </div>
                {enoughCategoriesSpace && <Categories/>}
            </div>
        </div>
    );
};

export default page;
