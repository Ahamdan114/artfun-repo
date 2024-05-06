import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import dataFetch from "@/assets/profile.js";
import "@/app/page.css";

export default function Home() {
    const { sections } = dataFetch;
    const enoughWidth = typeof window !== "undefined" && window.innerWidth > 768;

    return (
        <div className="page_container container">
            <Banner />
            <div className="description_container">
                <div className="page_presentation">
                    <h1>
                        Asociatia Activitati Creative, Sportive, Recreative Pentru Fiecare
                    </h1>
                    {sections.map(({ title, content }, index) => {
                        const titleFormatted =
                            title.length > 100 ? title.slice(0, 100) + "..." : title;
                        const contentFormatted =
                            content.length > 110
                                ? content.slice(0, 110) + "..."
                                : content;
                        return (
                            <div key={index} className="page_presentation_section">
                                <h3 className="page_presentation_section-title">
                                    {titleFormatted}
                                </h3>
                                <p className="page_presentation_section-content">
                                    {contentFormatted}
                                </p>
                            </div>
                        );
                    })}
                </div>
                {enoughWidth && <Categories />}
            </div>
        </div>
    );
}
