"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";

import "../styles/Search.css";
import fetchData from "@/assets/profile.js";

const Search = () => {
    // const [selectedOption, setSelectedOption] = useState("");
    const router = useRouter();
    const ID = 200;

    const { options } = fetchData;
    const handleChangeRoute = (path) => {
        if (typeof window !== "undefined") router.push(`/${path}`);
    };

    return (
        <>
            <select
                key={ID}
                className="principal-search search"
                // value={selectedOption}
                onChange={(e) => {
                    e.preventDefault();
                    // setSelectedOption(e.target.value);

                    const decapitalize = e.target.value.toLowerCase();
                    handleChangeRoute(decapitalize);
                }}
            >
                <option value="">-- Select an option --</option>
                {options.map((navItem) => (
                    <option value={navItem} className="header-nav-list-item" key={navItem}>{navItem}</option>
                ))}
            </select>
        </>
    );
};

export default Search;
