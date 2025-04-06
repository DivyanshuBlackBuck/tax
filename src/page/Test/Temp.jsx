import React from "react";
import "./Temp.css";

const blogs = [
    {
        title: "Tax Planning",
        description:
            "There are many variations of the passages available majority have suffered alteration in some.",
        icon: "/icons/tax-planning.png",
    },
    {
        title: "Personal Tax",
        description:
            "There are many variations of the passages available majority have suffered alteration in some.",
        icon: "/icons/personal-tax.png",
    },
    {
        title: "Insurance Tax",
        description:
            "There are many variations of the passages available majority have suffered alteration in some.",
        icon: "/icons/insurance-tax.png",
    },
    {
        title: "Corporate Tax",
        description:
            "There are many variations of the passages available majority have suffered alteration in some.",
        icon: "/icons/corporate-tax.png",
    },
];

const Temp = () => {
    return (
        <div className="blog-section">
            {blogs.map((item, index) => (
                <div className="blog-card" key={index}>
                    <div className="top-wave" />
                    <div className="icon-container">
                        <img src={item.icon} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="read-more">
                        Read More <span>→</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Temp;
