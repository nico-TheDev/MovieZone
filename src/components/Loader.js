import React from "react";

export default function Loader({loading}) {
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
