import "../styles/Footer.css";

export const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <div className="footer-container">
            <div className="upper-footer">
                <div className="footer-in-contact">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                    pariatur provident, facere quisquam nostrum dolor rerum quibusdam quod
                    incidunt dicta voluptatem quis atque ea unde odio animi quas sunt
                    sint.
                </div>
                <div className="footer-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
                    beatae at excepturi minus ullam nobis, assumenda tempore aliquid
                    explicabo placeat, porro possimus eligendi adipisci veritatis rerum!
                    A, consequatur autem!
                </div>
            </div>
            <div className="lower-footer">
                ©{currentDate} Asociatia Activitati Creative, Sportive, Recreative Pentru
                Fiecare. Toate drepturile sunt rezervate.
            </div>
        </div>
    );
};
