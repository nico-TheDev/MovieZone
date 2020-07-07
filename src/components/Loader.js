import React from "react";

export default function Loader({loading}) {
    window.scrollTo(0,0)
    return (
        <div className="loader" style={{display:loading ? 'grid' : 'none'}}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h2>Loading...</h2>
        </div>
    );
}
