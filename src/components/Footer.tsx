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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                        autem velit quaerat delectus omnis? Laudantium, dolores nesciunt
                        repudiandae ipsam culpa consectetur possimus magnam vel architecto
                        quis reiciendis, doloremque odit a.
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
