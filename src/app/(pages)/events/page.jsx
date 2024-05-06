import React from "react";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import EventCard from "@/components/EventCard";

import fetchData from "@/assets/profile.js";
import "@/app/(pages)/events/page.css";

const page = () => {
    const { events } = fetchData;

    return (
        <div className="container">
            <Banner />
            <div className="socials_container">
                <div className="page_presentation">
                    <h1 className="title_list">Events</h1>
                    <div className="event_list">
                        {events.map(({ id, img, shape, title, description, date }) => (
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
                <Categories />
            </div>
        </div>
    );
};

export default page;
