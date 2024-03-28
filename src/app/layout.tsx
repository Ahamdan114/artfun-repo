import { Inter } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

interface Root_Metadata {
    title: {
        default: string;
        template: string;
    };

    description: string;
}

export const metadata: Root_Metadata = {
    title: {
        default: "ARTFUN | Home",
        template: "ARTFUN | %s",
    },
    description: "Created a website for ARTFUN.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-us">
            <body>
                <Header />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
