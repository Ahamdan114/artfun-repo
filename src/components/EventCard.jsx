import "../styles/EventCard.css";

const EventCard = (props) => {
    const { img, shape, title, description, date } = props;
    const formattedDate = date;
    const MAX_LENGTH = 50;
    const formattedDescription =
        description.length > MAX_LENGTH ? description.slice(0, MAX_LENGTH) + "..." : description;

    function getBorderRadius() {
        if (shape == "circle") return "50%";
        else return "0%";
    }

    return (
        <div className="card-container">
            <div className="image-container">
                <img
                    src={img}
                    alt={title}
                    style={{ borderRadius: getBorderRadius() }}
                    width={150}
                    height={150}
                />
            </div>

            <div className="info-container">
                <div className="title">{title}</div>
                <p className="descripton">{formattedDescription}</p>
                <div className="date">{formattedDate}</div>
            </div>
        </div>
    );
};

export default EventCard;
