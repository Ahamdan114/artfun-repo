import Banner from "@/components/Banner";
import Categories from "@/components/Categories";

import fetchData from "@/assets/profile.js";
import "@/app/(pages)/about/page.css";

const page = () => {
    const { about_us } = fetchData;

    return (
        <div className="container">
            <Banner />
            <div className="about-us_container">
                <div className="page_presentation">
                    <h1>About us</h1>
                    {about_us.map(({ title, content }) => (
                        <div>
                            <h1 className="about_title">{title}</h1>
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
                <Categories />
            </div>
        </div>
    );
};

export default page;
