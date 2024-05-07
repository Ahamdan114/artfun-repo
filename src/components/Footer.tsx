import "../styles/Footer.css";

export const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <div className={`footer-container container`}>
            <div className="upper-footer">
                <div className="footer-in-contact">
                    <h2>Asociatia ARTFUN</h2>
                    <p>Telephone 0723679097</p>
                    <p>Soseaua Oltenitei nr 388, Bucuresti, sector 4</p>
                    <p>Email: creativ.sportiv.recreativ @gmail.com.</p>
                </div>
                <div className="footer-description">
                    <h2>Descriere</h2>
                    <p>
                        ARTFUN este o asociatie dedicata promovarii activitatilor
                        creative, sportive si recreative pentru toate categoriile de
                        varsta. Misiunea noastra este de a inspira comunitatea sa
                        exploreze si sa se exprime prin diverse forme de arta, sport si
                        activitati recreationale.
                    </p>
                </div>
            </div>
            <div className="lower-footer">
                ©{currentDate} Asociatia Activitati Creative, Sportive, Recreative Pentru
                Fiecare. Toate drepturile sunt rezervate.
            </div>
        </div>
    );
};
