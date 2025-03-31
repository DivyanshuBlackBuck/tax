import React from "react";
import "./Loading.css";

const LoadingComponent = () => {
    return (
        <div className="loading-container">
            <div className="coin">
                <div className="side front">₹</div>
                <div className="side back">₹</div>
            </div>
            <p>Loading GST & Tax Info...</p>
        </div>
    );
};

export default LoadingComponent;
