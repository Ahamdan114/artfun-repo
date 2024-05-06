import "@/styles/Card.css";

export const Card = ({ title, content }) => {
    const START = 0;
    const END = 15;
    const renderedContent = content.slice(START, END);

    return (
        <div className="card">
            <h6 className="card-title">{title}</h6>
            <a href="">
                <p className="card-content">{renderedContent}...</p>
            </a>
        </div>
    );
};
