"use client";
import { useState } from "react";
import "../styles/Search.css";

const Search = ({ className }: { className: string }) => {
    const [search, setSearch] = useState<string>("");

    return (
        <>
            <input
                className={`${className} search`}
                type="text"
                placeholder="Enter the section name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );
};

export default Search;
