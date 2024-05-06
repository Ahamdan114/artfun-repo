import React from "react";
import dataFetch from "@/assets/profile.js";
import { Card } from "@/components/Card";
import "@/styles/Categories.css"

const Categories = () => {
    const { categories } = dataFetch;

    return (
        <div className="page_categories">
            {categories.map(({ title, content }, index) => (
                <Card key={index} title={title} content={content} />
            ))}
        </div>
    );
};

export default Categories;
