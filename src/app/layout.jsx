import { Header } from "@/components/Header.jsx";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

export const metadata = {
    title: {
        default: "ARTFUN | Home",
        template: "ARTFUN | %s",
    },
    description: "Created a website for ARTFUN.",
};

export default function RootLayout({children}) {

    return (
        <html lang="en-us">
            <body>
                <Header />
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
