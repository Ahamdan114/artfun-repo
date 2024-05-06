"use client";

import Search from "./Search";
import dataFetch from "@/assets/profile";

import Logo from "@/assets/logo.png";
import Image from "next/image";

import { FaList } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/Header.css";

export const Header = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const { options } = dataFetch;
    const searchId = 15;

    const handleChangeRoute = (path) => {
        if (typeof window !== "undefined") router.push(`/${path}`);
    };

    return (
        <section className={`container header-nav`}>
            <div className="header-nav-logo">
                <Image src={Logo} alt="logo" />
            </div>

            <div className="occupier"></div>

            <Search key={searchId} />

            <div className={`header-nav-icon-container`}>
                <FaList onClick={() => setIsActive((prevState) => !prevState)} />
            </div>
            <div className="header-nav-container-list">
                <ul className={`header-nav-list ${isActive ? "show" : ""}`}>
                    {options.map((navItem) => (
                        <li
                            className="header-nav-list-item"
                            key={navItem}
                            onClick={(e) => {
                                e.preventDefault();
                                const decapitalize = navItem.toLowerCase();
                                handleChangeRoute(decapitalize);
                            }}
                        >
                            {navItem}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
