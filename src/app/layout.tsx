import { Inter } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const inter = Inter({ subsets: ["latin"] });

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
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
