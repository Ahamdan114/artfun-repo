import Search from "./Search";
import "../styles/Header.css";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="header-nav">
            <div className="header-nav-logo">
                <Image src={Logo} alt="logo" />
            </div>
            <Search className="principal-search" />

            <ul className="header-nav-list">
                <li className="header-nav-list-item">Home</li>
                <li className="header-nav-list-item">About</li>
                <li className="header-nav-list-item">Events</li>
                <li className="header-nav-list-item">Enrollment</li>
                <li className="header-nav-list-item">Socials</li>
                <li className="header-nav-list-item">Contact</li>
            </ul>
        </div>
    );
};
